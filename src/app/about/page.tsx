'use client';
import SidebarLayout from '@/components/Sidebar/SidebarLayout';

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div className="about_wrap">
        <div className="about_section01 inner_size">
          <div className="about_header">
            <h1 className="about_title">About Fact-tory</h1>
            <p className="about_subtitle">
              뉴스 편향성 분석 AI, 더 균형 잡힌 정보를 위한 여정
            </p>
          </div>

          <div className="about_content">
            <section className="about_mission">
              <h2>우리의 미션</h2>
              <p>
                Fact-tory는 인공지능을 활용하여 뉴스의 편향성을 분석하고,
                독자들이 더욱 균형 잡힌 시각으로 정보를 접할 수 있도록 돕습니다.
                우리는 투명하고 객관적인 뉴스 분석을 통해 건전한 언론 환경
                조성에 기여하고자 합니다.
              </p>
            </section>

            <section className="about_features">
              <h2>주요 기능</h2>
              <div className="features_grid">
                <div className="feature_card">
                  <div className="feature_icon">🎯</div>
                  <h3>편향성 분석</h3>
                  <p>
                    AI가 기사의 정치적 편향성을 분석하여 보수, 중립, 진보 성향을
                    수치화합니다.
                  </p>
                </div>

                <div className="feature_card">
                  <div className="feature_icon">📊</div>
                  <h3>사실/의견 구분</h3>
                  <p>
                    기사 내용 중 사실과 의견을 구분하여 객관적 정보 비율을
                    제공합니다.
                  </p>
                </div>

                <div className="feature_card">
                  <div className="feature_icon">🔍</div>
                  <h3>키워드 분석</h3>
                  <p>
                    기사의 핵심 키워드를 추출하고 문맥 속에서의 의미를
                    분석합니다.
                  </p>
                </div>

                <div className="feature_card">
                  <div className="feature_icon">📺</div>
                  <h3>관련 영상 추천</h3>
                  <p>
                    분석한 기사와 관련된 유튜브 영상을 추천하여 다양한 관점을
                    제공합니다.
                  </p>
                </div>
              </div>
            </section>

            <section className="about_team">
              <h2>개발팀</h2>
              <div className="team_grid">
                <div className="team_member">
                  <div className="member_avatar">👨‍💻</div>
                  <h4>Front-End 개발</h4>
                  <p>사용자 인터페이스 및 UX/UI 설계를 담당합니다.</p>
                </div>

                <div className="team_member">
                  <div className="member_avatar">🤖</div>
                  <h4>AI 엔지니어</h4>
                  <p>머신러닝 모델 개발 및 자연어 처리를 담당합니다.</p>
                </div>

                <div className="team_member">
                  <div className="member_avatar">⚙️</div>
                  <h4>Back-End 개발</h4>
                  <p>서버 아키텍처 및 API 개발을 담당합니다.</p>
                </div>
              </div>
            </section>

            <section className="about_contact">
              <h2>연락처 및 프로젝트</h2>
              <div className="contact_links">
                <a
                  href="https://github.com/facttory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_link"
                >
                  <img src="/img/common/ico_github_icon.svg" alt="GitHub" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="https://notion.so/facttory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_link"
                >
                  <img src="/img/common/ico_notion_icon.svg" alt="Notion" />
                  <span>Project Documentation</span>
                </a>
                <a href="mailto:contact@facttory.kr" className="contact_link">
                  <img src="/img/common/ico_face_icon.svg" alt="Contact" />
                  <span>Contact Us</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about_wrap {
          padding: 40px 0;
          min-height: calc(100vh - 140px);
        }

        .about_header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about_title {
          font-size: 48px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }

        .about_subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about_content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about_content section {
          margin-bottom: 60px;
        }

        .about_content h2 {
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          border-bottom: 2px solid #2a2e35;
          padding-bottom: 10px;
        }

        .about_content p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
        }

        .features_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .feature_card {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .feature_icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .feature_card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }

        .feature_card p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        .team_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .team_member {
          text-align: center;
          padding: 20px;
        }

        .member_avatar {
          font-size: 60px;
          margin-bottom: 16px;
        }

        .team_member h4 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .team_member p {
          font-size: 14px;
          color: #666;
        }

        .contact_links {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .contact_link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: #2a2e35;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .contact_link:hover {
          background: #1a1e25;
        }

        .contact_link img {
          width: 20px;
          height: 20px;
          filter: invert(1);
        }

        @media (max-width: 768px) {
          .about_title {
            font-size: 36px;
          }

          .features_grid {
            grid-template-columns: 1fr;
          }

          .team_grid {
            grid-template-columns: 1fr;
          }

          .contact_links {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </SidebarLayout>
  );
}
