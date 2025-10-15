'use client';

import { useEffect } from 'react';
import SearchModal from './SearchModal';
import HeroSection from './Main/HeroSection';
import FeaturesSection from './Main/FeaturesSection';
import NewsSection from './Main/NewsSection';
import Footer from './Footer/Footer';

interface MainPageProps {
  onOpenSearchModal?: () => void;
  isSearchModalOpen?: boolean;
  onCloseSearchModal?: () => void;
}

export default function MainPage({
  onOpenSearchModal,
  isSearchModalOpen,
  onCloseSearchModal,
}: MainPageProps) {
  // 뉴스 자동 업데이트 (실제로는 API 호출)
  useEffect(() => {
    const updateNews = () => {
      // 실제 환경에서는 API 호출하여 뉴스 갱신
      console.log('뉴스 업데이트:', new Date());
    };

    const interval = setInterval(updateNews, 30000); // 30초마다
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 검색 모달 */}
      <SearchModal
        isOpen={isSearchModalOpen || false}
        onClose={onCloseSearchModal || (() => {})}
      />

      <div className="content-area relative">
        {/* 히어로 섹션 */}
        <HeroSection onOpenSearchModal={onOpenSearchModal} />

        {/* 기능 소개 섹션 */}
        <FeaturesSection />

        {/* 뉴스 섹션 */}
        <NewsSection />

        {/* 푸터 */}
        <Footer />
      </div>
    </>
  );
}
