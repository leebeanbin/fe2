'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log('검색:', searchValue);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[760px] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{
        backgroundImage: `url('/img/main/img_sec01.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '702px',
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex-1 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-6xl font-bold leading-tight mb-10"
            >
              뉴스 편향성 분석 AI <br />
              <span className="text-purple-400 text-7xl">Fact-tory</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg leading-relaxed mb-16 font-light tracking-wide"
            >
              AI 기술로 뉴스 기사의 편향성을 분석하고 <br />
              객관적인 정보를 제공하여 균형잡힌 뉴스 소비를 <br />
              도와드리는 차세대 미디어 분석 플랫폼입니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center max-w-2xl"
            >
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="기사 URL을 입력하면 AI가 분석해요."
                className="flex-1 h-14 px-6 text-lg font-normal bg-white border-none rounded-l-full focus:outline-none focus:ring-0"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                className="h-14 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-bold rounded-r-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 flex items-center gap-3"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                검색하기
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
