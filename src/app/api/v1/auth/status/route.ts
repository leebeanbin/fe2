import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (!accessToken && !refreshToken) {
      return NextResponse.json({
        success: true,
        data: {
          authenticated: false,
          user: null,
        },
      });
    }

    // 백엔드 API로 토큰 검증 요청
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!backendUrl) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'SERVICE_UNAVAILABLE',
            message: '인증 서비스를 일시적으로 사용할 수 없습니다.',
          },
        },
        { status: 503 }
      );
    }

    const response = await fetch(`${backendUrl}/api/v1/auth/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const userData = await response.json();
      return NextResponse.json({
        success: true,
        data: {
          authenticated: true,
          user: userData.data,
        },
      });
    } else {
      return NextResponse.json({
        success: true,
        data: {
          authenticated: false,
          user: null,
        },
      });
    }
  } catch (error) {
    console.error('Auth status check error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: '인증 상태 확인 중 오류가 발생했습니다.',
        },
      },
      { status: 500 }
    );
  }
}
