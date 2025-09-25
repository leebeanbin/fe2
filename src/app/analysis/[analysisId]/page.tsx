import SidebarLayout from '@/components/Sidebar/SidebarLayout';
import { getAnalysisResultOnServer } from '@/services/analysis';
import { highlightText, highlightViewpoint } from '@/utils/highlight';
import type { ApiEnvelope } from '@/types/analysis/analysis';
import type {
  AnalysisResultData,
  RelatedVideo,
} from '@/types/analysis/analysis';
import { notFound } from 'next/navigation';

function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be'))
      return u.pathname.replace('/', '') || null;
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
    return null;
  } catch {
    return null;
  }
}

type PageProps = {
  params: Promise<{ analysisId: string }>;
  searchParams: Promise<{
    charts_format?: 'highcharts' | 'd3' | 'raw' | 'none';
    videos_limit?: string | string[];
    include_content?: 'true' | 'false' | string | string[];
  }>;
};

const isChartsFormat = (
  x: unknown
): x is 'highcharts' | 'd3' | 'raw' | 'none' =>
  x === 'highcharts' || x === 'd3' || x === 'raw' || x === 'none';

const first = <T,>(v: T | T[] | undefined): T | undefined =>
  Array.isArray(v) ? v[0] : v;

const parseVideosLimit = (v?: string) => {
  const n = Number(v);
  if (Number.isNaN(n)) return 5;
  return Math.min(10, Math.max(0, Math.floor(n)));
};

const parseBool = (v?: string) =>
  v === undefined ? true : String(v).toLowerCase() === 'true';

export default async function Page(props: PageProps) {
  const { analysisId } = await props.params;
  const sp = await props.searchParams;

  const charts_format = isChartsFormat(first(sp.charts_format))
    ? first(sp.charts_format)!
    : 'highcharts';
  const videos_limit = parseVideosLimit(
    first(sp.videos_limit as string | undefined)
  );
  const include_content = parseBool(
    first(sp.include_content as string | undefined)
  );

  let envelope: ApiEnvelope<AnalysisResultData>;
  try {
    envelope = await getAnalysisResultOnServer(
      analysisId,
      { charts_format, videos_limit, include_content },
      true
    );
  } catch {
    notFound();
  }

  if (!envelope?.success || !envelope.data) notFound();

  const { article, analysis, charts, relatedVideos } = envelope.data;

  const BIAS_LABEL: Record<'conservative' | 'neutral' | 'progressive', string> =
    {
      conservative: '보수',
      neutral: '중립',
      progressive: '진보',
    };
  const bias = analysis.biasAnalysis.overall;
  const biasPercent = Math.round(bias.score * 100);
  const biasKorean = BIAS_LABEL[bias.bias];

  const fact = analysis.biasAnalysis.factOpinionRatio.fact;
  const opinion = analysis.biasAnalysis.factOpinionRatio.opinion;
  const coreKeywords =
    analysis.keywordAnalysis.coreKeywords?.slice(0, 4).map(k => k.word) ?? [];

  const ytIds: string[] = relatedVideos
    .map((v: RelatedVideo) => youtubeId(v.url))
    .filter((id): id is string => Boolean(id));

  const group = analysis.keywordAnalysis.keywordSentences?.[0];
  const kwList = group?.keyword ? [group.keyword] : [];

  return (
    <SidebarLayout>
      <div
        className="min-h-screen"
        style={{
          background:
            'linear-gradient(135deg, #1e1b4b 0%, #0f0f23 50%, #000000 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 메인 헤더 */}
          <div className="text-center mb-12">
            <div className="flex justify-end mb-4">
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: '#555d7e' }}
              >
                <span>로그인 /</span>
                <span>사용자 프로필</span>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 shadow-lg border mb-8"
              style={{
                backgroundColor: '#2a2e35',
                borderColor: '#3a3b4b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    article.factCheck?.status === 'verified'
                      ? 'text-green-300'
                      : 'text-yellow-300'
                  }`}
                  style={{
                    backgroundColor:
                      article.factCheck?.status === 'verified'
                        ? 'rgba(34, 197, 94, 0.2)'
                        : 'rgba(234, 179, 8, 0.2)',
                  }}
                >
                  {article.factCheck?.status === 'verified' ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      사실 검증이 완료된 기사입니다
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      사실 검증 정보가 없습니다
                    </>
                  )}
                </span>
              </div>

              <h1
                className="text-3xl font-bold mb-6"
                style={{ color: '#d0d0d0' }}
              >
                {article.title}
              </h1>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-white font-semibold rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                  style={{
                    backgroundColor: '#6366f1',
                    boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = '#4f46e5')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor = '#6366f1')
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  기사 원문보기
                </a>

                <div className="flex-1">
                  <div className="text-left">
                    <div className="flex items-center mb-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                        style={{ backgroundColor: '#6366f120' }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#6366f1"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: '#d0d0d0' }}
                      >
                        AI 요약
                      </h3>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ backgroundColor: '#171717' }}
                    >
                      <p
                        className="leading-relaxed"
                        style={{ color: '#d0d0d0' }}
                      >
                        {article.summary || '요약 정보가 없습니다.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4개 분석 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* 기사 요약 카드 */}
            <div
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{
                backgroundColor: '#2a2e35',
                borderColor: '#3a3b4b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#d0d0d0' }}>
                  기사 요약
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#555d7e' }}
                >
                  <span
                    className="font-medium"
                    style={{ color: '#d0d0d0' }}
                  >{`'${analysis.factDescription}'`}</span>{' '}
                  에 대한 기사예요
                </p>
              </div>
            </div>

            {/* 편향 분석 카드 */}
            <div
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{
                backgroundColor: '#2a2e35',
                borderColor: '#3a3b4b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#6366f120' }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#6366f1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#d0d0d0' }}>
                  편향 분석
                </h3>
                <p className="text-sm mb-2" style={{ color: '#555d7e' }}>
                  <span
                    className="font-medium"
                    style={{ color: '#d0d0d0' }}
                  >{`'${biasKorean}'`}</span>{' '}
                  쪽으로
                </p>
                <div
                  className="text-3xl font-bold"
                  style={{ color: '#6366f1' }}
                >
                  {biasPercent}%
                </div>
                <p className="text-xs" style={{ color: '#555d7e' }}>
                  기울었어요
                </p>
              </div>
            </div>

            {/* 사실 검증 카드 */}
            <div
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{
                backgroundColor: '#2a2e35',
                borderColor: '#3a3b4b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#d0d0d0' }}>
                  사실 검증
                </h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm" style={{ color: '#555d7e' }}>
                      의견:{' '}
                    </span>
                    <span className="text-lg font-bold text-red-500">
                      {opinion}%
                    </span>
                  </div>
                  <div>
                    <span className="text-sm" style={{ color: '#555d7e' }}>
                      사실:{' '}
                    </span>
                    <span className="text-lg font-bold text-green-500">
                      {fact}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 핵심 단어 카드 */}
            <div
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{
                backgroundColor: '#2a2e35',
                borderColor: '#3a3b4b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="rgb(249, 115, 22)"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-4" style={{ color: '#d0d0d0' }}>
                  핵심 단어
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {coreKeywords.length ? (
                    coreKeywords.map(word => (
                      <span
                        key={word}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(249, 115, 22, 0.2)',
                          color: 'rgb(249, 115, 22)',
                        }}
                      >
                        {word}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm" style={{ color: '#555d7e' }}>
                      핵심 단어 정보가 없습니다
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 상세 분석 섹션 */}
          <div
            className="rounded-2xl p-8 shadow-lg border mb-12"
            style={{
              backgroundColor: '#2a2e35',
              borderColor: '#3a3b4b',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-center mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: '#6366f120' }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#6366f1"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8h6m-6 4h6"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#d0d0d0' }}>
                상세 분석
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* 분석 문장들 */}
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                    style={{ backgroundColor: '#6366f120' }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#6366f1"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: '#d0d0d0' }}
                  >
                    핵심 문장 분석
                  </h3>
                </div>
                <div className="space-y-4">
                  {group?.sentences?.slice(0, 2).map((sentence, idx) => (
                    <div
                      key={`sent-${idx}`}
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: '#171717' }}
                    >
                      <div
                        className="text-sm leading-relaxed"
                        style={{ color: '#d0d0d0' }}
                        dangerouslySetInnerHTML={{
                          __html: highlightText(sentence, kwList),
                        }}
                      />
                    </div>
                  )) || (
                    <div
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: '#171717' }}
                    >
                      <p className="text-sm" style={{ color: '#555d7e' }}>
                        분석 문장이 없습니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 편향성 설명 */}
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                    style={{ backgroundColor: '#6366f120' }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#6366f1"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: '#d0d0d0' }}
                  >
                    편향성 분석 결과
                  </h3>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: '#171717' }}
                >
                  <div
                    className="text-sm leading-relaxed"
                    style={{ color: '#d0d0d0' }}
                    dangerouslySetInnerHTML={{
                      __html: highlightViewpoint(analysis.biasDescription),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 차트 영역 */}
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                  style={{ backgroundColor: '#6366f120' }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#6366f1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: '#d0d0d0' }}
                >
                  시각적 분석
                </h3>
              </div>
              <div
                className="rounded-lg p-8 text-center"
                style={{ backgroundColor: '#171717' }}
              >
                <div style={{ color: '#555d7e' }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#2a2e35' }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p>차트 데이터를 로드 중입니다...</p>
                </div>
              </div>
            </div>
          </div>

          {/* 관련 영상 섹션 */}
          <div
            className="rounded-2xl p-8 shadow-lg border"
            style={{
              backgroundColor: '#2a2e35',
              borderColor: '#3a3b4b',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: '#6366f120' }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#6366f1"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#d0d0d0' }}>
                관련 유튜브 영상
              </h2>
            </div>
            <div
              className="rounded-lg p-8 text-center"
              style={{ backgroundColor: '#171717' }}
            >
              <div style={{ color: '#555d7e' }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#2a2e35' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4z"
                    />
                  </svg>
                </div>
                <p>관련 영상을 로드 중입니다...</p>
                {ytIds.length > 0 && (
                  <p className="text-sm mt-2">
                    {ytIds.length}개의 관련 영상을 찾았습니다.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
