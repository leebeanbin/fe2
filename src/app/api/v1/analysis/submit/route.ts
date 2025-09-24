import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    // URL 검증
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_URL',
            message: '유효한 URL이 필요합니다.',
          },
        },
        { status: 400 }
      );
    }

    // URL 형식 검증
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MALFORMED_URL',
            message: '올바른 URL 형식이 아닙니다.',
          },
        },
        { status: 400 }
      );
    }

    // 실제 백엔드 API로 프록시
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!backendUrl) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'SERVICE_UNAVAILABLE',
            message: '분석 서비스를 일시적으로 사용할 수 없습니다.',
          },
        },
        { status: 503 }
      );
    }

    const response = await fetch(`${backendUrl}/api/v1/analysis/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: request.headers.get('Authorization') || '',
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Analysis submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: '분석 요청 처리 중 오류가 발생했습니다.',
        },
      },
      { status: 500 }
    );
  }
}
