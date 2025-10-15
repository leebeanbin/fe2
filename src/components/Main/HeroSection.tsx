'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroSectionProps {
  onOpenSearchModal?: () => void;
}

export default function HeroSection({ onOpenSearchModal }: HeroSectionProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      // URL 검증
      try {
        new URL(searchValue);
        // 분석 페이지로 이동
        window.location.href = `/analyze?url=${encodeURIComponent(searchValue)}`;
      } catch {
        // URL이 아닌 경우 검색 모달 열기
        onOpenSearchModal?.();
      }
    }
  };

  return (
    <section className="section01 relative z-10">
      <div className="inner_size sec01_inner">
        <div className="sec01_left">
          <motion.h1
            className="sec01_left_tit"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            뉴스 편향성 분석 AI <br />
            <span>Fact-tory</span>
          </motion.h1>

          <motion.p
            className="sec01_left_txt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI가 뉴스의 편향성을 분석하고 객관적인 정보를 제공합니다. <br />
            다양한 관점에서 뉴스를 바라보고 균형 잡힌 시각을 얻어보세요. <br />
            팩트체킹과 신뢰할 수 있는 정보만을 선별해드립니다.
          </motion.p>

          <motion.div
            className="main_searhbox"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 입력 필드 */}
            <input
              type="text"
              placeholder="기사 URL을 입력하면 AI가 분석해요."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />

            {/* 오른쪽 동그란 별 버튼 */}
            <button className="star_btn_circle" onClick={handleSearch}>
              <span className="star_icon"></span>
              <span className="star_text">분석하기</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
