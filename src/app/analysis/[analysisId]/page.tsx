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
      <div className="results_wrap">
        <div className="results_section01 inner_size">
          <ul className="results_top">
            <li>
              <span>
                {article.factCheck?.status === 'verified' ? (
                  <>
                    사실 검증이 <em>완료된 기사</em>입니다
                  </>
                ) : (
                  <>사실 검증 정보가 없습니다</>
                )}
              </span>
            </li>
            <li>
              <p>{article.title}</p>
            </li>
          </ul>

          <div className="results_news_wrap">
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="results_news_btn"
            >
              <span>기사 원문보기</span>
            </a>

            <div className="results_news_con">
              <p>
                <span>AI 요약</span>
              </p>
              <div className="results_news_box p_txt">
                <p className="p_txt">
                  {article.summary || '요약 정보가 없습니다.'}
                </p>
              </div>
            </div>
          </div>

          <ul className="results_summary">
            <li className="results_summary01">
              <p className="results_summary_tit">기사 요약</p>
              <p className="results_summary_txt">
                <span>{`'${analysis.factDescription}'`}</span> 에 대한 기사예요
                <br />
              </p>
            </li>

            <li>
              <p className="results_summary_tit">편향 분석</p>
              <p className="results_summary_txt">
                <span>{`'${biasKorean}'`}</span> 쪽으로
                <br />
                <em className="results_summary_number">{biasPercent}%</em>
                기울었어요
              </p>
            </li>

            <li>
              <p className="results_summary_tit">사실 검증</p>
              <p className="results_summary_txt">
                <span>&apos;의견&apos;</span>은{' '}
                <em className="results_summary_number">{opinion}%</em>
                <br />
                <span>&apos;사실&apos;</span>은{' '}
                <em className="results_summary_number">{fact}%</em>
                <br />
                차지해요
              </p>
            </li>

            <li>
              <p className="results_summary_tit">핵심 단어</p>
              <ul className="results_summary_txt">
                {coreKeywords.length ? (
                  coreKeywords.map(w => (
                    <li key={w}>
                      <span>{`'${w}'`}</span>
                    </li>
                  ))
                ) : (
                  <li>핵심 단어 정보가 없습니다</li>
                )}
                <li>핵심이예요</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="results_section02">
          <div className="inner_size">
            <p className="sub_tit">상세 분석</p>
            <ul className="results_list">
              <li className="results_list01">
                <ul className="results_list_box">
                  {group?.sentences
                    ?.slice(0, 2)
                    .map((s, idx) => (
                      <li key={`sent-${idx}`}>{highlightText(s, kwList)}</li>
                    )) || <li>분석 문장이 없습니다.</li>}
                </ul>
              </li>

              <li className="results_list02">
                <ul className="results_list_box">
                  <li>{highlightViewpoint(analysis.biasDescription)}</li>
                </ul>
              </li>

              {/* 차트 영역 - 기본 플레이스홀더 */}
              <li className="results_list03">
                <div className="chart-placeholder">
                  <p>차트 데이터를 로드 중입니다...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 유튜브 슬라이더 */}
        <div className="results_section03 inner_size">
          <p className="sub_tit">관련 유튜브 영상</p>
          <div className="results_slider_wrap">
            <div className="youtube-placeholder">
              <p>관련 영상을 로드 중입니다...</p>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
