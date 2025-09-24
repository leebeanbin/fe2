'use client';
import { useState } from 'react';
import SidebarLayout from '@/components/Sidebar/SidebarLayout';

interface AnalysisHistory {
  id: string;
  title: string;
  url: string;
  bias: 'conservative' | 'neutral' | 'progressive';
  biasScore: number;
  factRatio: number;
  opinionRatio: number;
  analyzedAt: string;
  status: 'completed' | 'processing' | 'failed';
}

export default function UserAnalyticsPage() {
  // 임시 데이터 - 실제로는 API에서 가져올 데이터
  const [analysisHistory] = useState<AnalysisHistory[]>([
    {
      id: '1',
      title: '2024년 경제 정책 방향에 대한 정부 발표',
      url: 'https://example.com/news/1',
      bias: 'neutral',
      biasScore: 52,
      factRatio: 75,
      opinionRatio: 25,
      analyzedAt: '2024-01-15T10:30:00Z',
      status: 'completed',
    },
    {
      id: '2',
      title: '교육 개혁안 논란, 찬반 의견 팽팽',
      url: 'https://example.com/news/2',
      bias: 'progressive',
      biasScore: 68,
      factRatio: 60,
      opinionRatio: 40,
      analyzedAt: '2024-01-14T15:45:00Z',
      status: 'completed',
    },
    {
      id: '3',
      title: '부동산 시장 동향 분석 리포트',
      url: 'https://example.com/news/3',
      bias: 'conservative',
      biasScore: 71,
      factRatio: 80,
      opinionRatio: 20,
      analyzedAt: '2024-01-13T09:15:00Z',
      status: 'completed',
    },
  ]);

  const [selectedPeriod, setSelectedPeriod] = useState('7days');

  const biasStats = {
    conservative: analysisHistory.filter(item => item.bias === 'conservative')
      .length,
    neutral: analysisHistory.filter(item => item.bias === 'neutral').length,
    progressive: analysisHistory.filter(item => item.bias === 'progressive')
      .length,
  };

  const averageFactRatio =
    analysisHistory.reduce((sum, item) => sum + item.factRatio, 0) /
    analysisHistory.length;
  const averageOpinionRatio =
    analysisHistory.reduce((sum, item) => sum + item.opinionRatio, 0) /
    analysisHistory.length;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString('ko-KR') +
      ' ' +
      date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    );
  };

  const getBiasLabel = (bias: string) => {
    const labels = {
      conservative: '보수',
      neutral: '중립',
      progressive: '진보',
    };
    return labels[bias as keyof typeof labels] || bias;
  };

  const getBiasColor = (bias: string) => {
    const colors = {
      conservative: '#dc3545',
      neutral: '#6c757d',
      progressive: '#007bff',
    };
    return colors[bias as keyof typeof colors] || '#6c757d';
  };

  return (
    <SidebarLayout>
      <div className="user_analytics_wrap">
        <div className="user_analytics_section inner_size">
          <div className="analytics_header">
            <h1 className="analytics_title">사용자 분석 페이지</h1>
            <p className="analytics_subtitle">
              분석 히스토리와 통계를 확인하세요
            </p>
          </div>

          {/* 통계 카드 */}
          <div className="stats_grid">
            <div className="stat_card">
              <div className="stat_icon">📊</div>
              <div className="stat_info">
                <h3>총 분석 수</h3>
                <div className="stat_number">{analysisHistory.length}</div>
              </div>
            </div>

            <div className="stat_card">
              <div className="stat_icon">📈</div>
              <div className="stat_info">
                <h3>평균 사실 비율</h3>
                <div className="stat_number">
                  {averageFactRatio.toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="stat_card">
              <div className="stat_icon">💭</div>
              <div className="stat_info">
                <h3>평균 의견 비율</h3>
                <div className="stat_number">
                  {averageOpinionRatio.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* 편향성 분포 */}
          <div className="bias_distribution">
            <h2>편향성 분포</h2>
            <div className="bias_chart">
              <div className="bias_bar">
                <div
                  className="bias_segment conservative"
                  style={{
                    width: `${(biasStats.conservative / analysisHistory.length) * 100}%`,
                  }}
                ></div>
                <div
                  className="bias_segment neutral"
                  style={{
                    width: `${(biasStats.neutral / analysisHistory.length) * 100}%`,
                  }}
                ></div>
                <div
                  className="bias_segment progressive"
                  style={{
                    width: `${(biasStats.progressive / analysisHistory.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="bias_legend">
                <div className="legend_item">
                  <div className="legend_color conservative"></div>
                  <span>보수 ({biasStats.conservative})</span>
                </div>
                <div className="legend_item">
                  <div className="legend_color neutral"></div>
                  <span>중립 ({biasStats.neutral})</span>
                </div>
                <div className="legend_item">
                  <div className="legend_color progressive"></div>
                  <span>진보 ({biasStats.progressive})</span>
                </div>
              </div>
            </div>
          </div>

          {/* 분석 히스토리 */}
          <div className="analysis_history">
            <div className="history_header">
              <h2>분석 히스토리</h2>
              <select
                value={selectedPeriod}
                onChange={e => setSelectedPeriod(e.target.value)}
                className="period_selector"
              >
                <option value="7days">최근 7일</option>
                <option value="30days">최근 30일</option>
                <option value="90days">최근 90일</option>
                <option value="all">전체</option>
              </select>
            </div>

            <div className="history_list">
              {analysisHistory.map(item => (
                <div key={item.id} className="history_item">
                  <div className="item_header">
                    <h4 className="item_title">{item.title}</h4>
                    <div className="item_date">
                      {formatDate(item.analyzedAt)}
                    </div>
                  </div>

                  <div className="item_url">{item.url}</div>

                  <div className="item_stats">
                    <div className="bias_info">
                      <span
                        className="bias_label"
                        style={{ color: getBiasColor(item.bias) }}
                      >
                        {getBiasLabel(item.bias)} ({item.biasScore}%)
                      </span>
                    </div>

                    <div className="fact_opinion_ratio">
                      <span className="fact_ratio">사실 {item.factRatio}%</span>
                      <span className="opinion_ratio">
                        의견 {item.opinionRatio}%
                      </span>
                    </div>

                    <div className="status_badge">
                      <span className={`status ${item.status}`}>
                        {item.status === 'completed'
                          ? '완료'
                          : item.status === 'processing'
                            ? '처리중'
                            : '실패'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .user_analytics_wrap {
          padding: 40px 0;
          min-height: calc(100vh - 140px);
        }

        .analytics_header {
          text-align: center;
          margin-bottom: 50px;
        }

        .analytics_title {
          font-size: 36px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
        }

        .analytics_subtitle {
          font-size: 16px;
          color: #666;
        }

        .stats_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 50px;
        }

        .stat_card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat_icon {
          font-size: 32px;
        }

        .stat_info h3 {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .stat_number {
          font-size: 28px;
          font-weight: 700;
          color: #2a2e35;
        }

        .bias_distribution {
          margin-bottom: 50px;
        }

        .bias_distribution h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        .bias_bar {
          height: 40px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          margin-bottom: 16px;
        }

        .bias_segment {
          height: 100%;
        }

        .bias_segment.conservative {
          background-color: #dc3545;
        }

        .bias_segment.neutral {
          background-color: #6c757d;
        }

        .bias_segment.progressive {
          background-color: #007bff;
        }

        .bias_legend {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .legend_item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend_color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .legend_color.conservative {
          background-color: #dc3545;
        }

        .legend_color.neutral {
          background-color: #6c757d;
        }

        .legend_color.progressive {
          background-color: #007bff;
        }

        .analysis_history h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }

        .history_header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 24px;
        }

        .period_selector {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }

        .history_list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .history_item {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
        }

        .item_header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .item_title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          flex: 1;
          margin-right: 16px;
        }

        .item_date {
          font-size: 12px;
          color: #999;
          white-space: nowrap;
        }

        .item_url {
          font-size: 12px;
          color: #666;
          margin-bottom: 16px;
          word-break: break-all;
        }

        .item_stats {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .bias_label {
          font-weight: 600;
          font-size: 14px;
        }

        .fact_opinion_ratio {
          display: flex;
          gap: 12px;
          font-size: 12px;
        }

        .fact_ratio {
          color: #28a745;
        }

        .opinion_ratio {
          color: #ffc107;
        }

        .status_badge .status {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .status.completed {
          background: #d4edda;
          color: #155724;
        }

        .status.processing {
          background: #fff3cd;
          color: #856404;
        }

        .status.failed {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 768px) {
          .stats_grid {
            grid-template-columns: 1fr;
          }

          .history_header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .item_header {
            flex-direction: column;
            align-items: flex-start;
          }

          .item_stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </SidebarLayout>
  );
}
