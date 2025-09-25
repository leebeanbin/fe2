'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// 하단 탭바 아이템 타입
interface TabItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const tabItems: TabItem[] = [
  { id: 'home', label: '홈', icon: '/img/mobile/ico_home.svg', href: '/' },
  {
    id: 'analysis',
    label: '분석',
    icon: '/img/mobile/ico_analysis.svg',
    href: '/analysis',
  },
  {
    id: 'history',
    label: '히스토리',
    icon: '/img/mobile/ico_history.svg',
    href: '/history',
  },
  {
    id: 'profile',
    label: '프로필',
    icon: '/img/mobile/ico_profile.svg',
    href: '/profile',
  },
];

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="mobile-layout">
      {/* 상단 헤더 */}
      <header className="mobile-header">
        <div className="header-content">
          <Link href="/" className="logo">
            <Image
              src="/img/common/header_logo.png"
              alt="Fact-tory"
              width={40}
              height={40}
            />
            <span className="logo-text">Fact-tory</span>
          </Link>

          <button className="search-btn">
            <Image
              src="/img/mobile/ico_search.svg"
              alt="검색"
              width={24}
              height={24}
            />
          </button>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="mobile-main">
        <div className="content-wrapper">{children}</div>
      </main>

      {/* 하단 탭바 */}
      <nav className="mobile-tabbar">
        {tabItems.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className={`tab-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <Image src={item.icon} alt={item.label} width={24} height={24} />
            <span className="tab-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
