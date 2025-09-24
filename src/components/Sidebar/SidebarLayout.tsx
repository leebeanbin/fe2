'use client';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import TopButton from './TopButton';
import { useState } from 'react';

const historyItems = [
  // test data
  '이건희 회장 항가나가나나내',
  '이건희 회장 단독주택',
  '이재용 부회장 청문회',
];

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div id="wrap" className={isSidebarCollapsed ? 'sidebar-collapsed' : ''}>
      {/* 모바일 헤더 (768px 이하에서만 표시) */}
      <div className="mobile-header">
        <Link href="/" className="logo">
          <Image
            src="/img/common/header_logo.png"
            alt="로고"
            width={32}
            height={32}
          />
          <span>Fact-tory</span>
        </Link>
        <button className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 데스크톱 사이드바 (768px 초과에서만 표시) */}
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar_inner">
          {/* 로고 영역 - ChatGPT 스타일 */}
          <div className="sidebar_top">
            <div className="sidebar_logo_container">
              <button
                className="sidebar_logo"
                onClick={toggleSidebar}
                aria-label={
                  isSidebarCollapsed ? '사이드바 펼치기' : '사이드바 접기'
                }
              >
                <Image
                  src="/img/common/header_logo.png"
                  alt="로고"
                  width={84}
                  height={97}
                  className="logo-image"
                />
              </button>
            </div>

            <Link href="/search" className="sidebar_search">
              <span className={isSidebarCollapsed ? 'search-icon-only' : ''}>
                {isSidebarCollapsed ? '' : '기사 히스토리 검색'}
              </span>
            </Link>
          </div>

          {/* 메뉴 */}
          <nav className="sidebar_nav">
            <ul className="sidebar_depth">
              <li>
                <Link href="/">
                  <span className="sidebar_ico haader_home">
                    {!isSidebarCollapsed && '홈화면'}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/user-analytics">
                  <span className="sidebar_ico haader_user">
                    {!isSidebarCollapsed && '사용자 분석페이지'}
                  </span>
                </Link>
              </li>
            </ul>

            {!isSidebarCollapsed && (
              <div className="history_depth_wrap">
                <ul className="history_depth">
                  <li>
                    <p>기사 히스토리 분석</p>
                    <Sidebar items={historyItems} />
                  </li>
                </ul>
              </div>
            )}
          </nav>

          {/* 하단 고정 메뉴 */}
          <ul className="sidebar_bott">
            <li className="btn_login">
              <Link href="/auth/login">
                <span className="sidebar_ico haader_login">
                  {!isSidebarCollapsed && 'Login'}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="sidebar_ico haader_about">
                  {!isSidebarCollapsed && 'About Us'}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 콘텐츠 영역 */}
      <div className="right_wrap">
        <div id="contents_wrap" className="main_contents">
          {children}
        </div>
        <Footer></Footer>
      </div>

      <TopButton></TopButton>

      {/* <button id="top_btn" type="button">
        <span className="skip">스크롤아이콘입니다.</span>
      </button> */}
    </div>
  );
}
