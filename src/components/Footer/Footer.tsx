export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner inner_size">
        <div className="project_link">
          <p>Project</p>
          <ul className="project_link_icon">
            <li>
              <a href="mailto:contact@facttory.kr">
                <img src="/img/common/ico_face_icon.svg" alt="Contact" />
              </a>
            </li>
            <li>
              <a
                href="https://notion.so/facttory"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/ico_notion_icon.svg" alt="Notion" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/facttory"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/ico_github_icon.svg" alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_center gap32">
          <div className="footer_link_wrap">
            <ul className="footer_link_depth gap40">
              <li className="gap32">
                <a href="/opensource">오픈소스 안내</a>
                <ul className="footer_link_depth02 gap12">
                  <li className="p_txt">
                    <a href="/license">오픈소스 라이센스</a>
                  </li>
                  <li className="p_txt">
                    <a href="/contributing">기여 가이드</a>
                  </li>
                </ul>
              </li>
              <li className="gap32">
                <a href="/navigation">빠른 이동</a>
                <ul className="footer_link_depth02 gap12">
                  <li className="p_txt">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="p_txt">
                    <a href="/">분석 시작하기</a>
                  </li>
                  <li className="p_txt">
                    <a href="/user-analytics">내가 본 뉴스 보기</a>
                  </li>
                  <li className="p_txt">
                    <a href="/search">분석 내용 검색</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="project_member gap32">
            <p>뉴스 편향성 분석 AI 만든 사람들</p>
            <ul className="member_list gap24">
              {[
                'Front-End 개발 & UIUX설계 디자인',
                'Back-End 개발 & AI 기능 구현',
                'Front-End 개발 & Back-End 기능 지원',
              ].map((text, i) => (
                <li key={i}>
                  <a
                    href="https://github.com/facttory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap16"
                  >
                    <div className="member_img">
                      <img src="/img/common/ico_github_icon.svg" alt="" />
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: text.replace(' & ', ' &<br/>'),
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <ul className="footer_bott_list gap20 p_txt">
            <li>© 2025 Fact-tory. All rights reserved.</li>
            <li>v1.0.0 Beta</li>
            <li>
              <a href="/privacy" className="user_agree fw700">
                개인정보처리방침
              </a>
            </li>
            <li>Icons by Unicons (Iconscout) – CC BY 4.0</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
