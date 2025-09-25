export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner inner_size">
        <div className="footer_content">
          <div className="footer_logo">
            <h3>Fact-tory</h3>
            <p>뉴스 편향성 분석 AI</p>
          </div>

          <div className="footer_links">
            <div className="footer_link_group">
              <h4>서비스</h4>
              <ul>
                <li>
                  <a href="/analyze">뉴스 분석</a>
                </li>
                <li>
                  <a href="/analyze">편향성 검사</a>
                </li>
                <li>
                  <a href="/analyze">팩트체킹</a>
                </li>
              </ul>
            </div>
            <div className="footer_link_group">
              <h4>회사</h4>
              <ul>
                <li>
                  <a href="/about">회사소개</a>
                </li>
                <li>
                  <a href="/about">블로그</a>
                </li>
                <li>
                  <a href="/about">채용</a>
                </li>
              </ul>
            </div>
            <div className="footer_link_group">
              <h4>지원</h4>
              <ul>
                <li>
                  <a href="/about">고객지원</a>
                </li>
                <li>
                  <a href="/about">API 문서</a>
                </li>
                <li>
                  <a href="/about">개발자 가이드</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_copyright">
            <p>&copy; 2025 Fact-tory. All rights reserved.</p>
          </div>
          <div className="footer_policy">
            <a href="/about">개인정보처리방침</a>
            <span>|</span>
            <a href="/about">이용약관</a>
            <span>|</span>
            <a href="/about">쿠키정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
