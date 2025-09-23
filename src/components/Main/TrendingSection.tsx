'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { id: 1, name: '정치', count: 24 },
  { id: 2, name: '경제', count: 18 },
  { id: 3, name: '사회', count: 32 },
  { id: 4, name: '문화', count: 15 },
  { id: 5, name: '국제', count: 21 },
];

const mockArticles = [
  {
    id: 1,
    title: '인공지능 기술의 뉴스 분석 활용 확산',
    summary:
      '최근 AI 기술을 활용한 뉴스 분석 서비스가 언론계에서 주목받고 있으며, 편향성 검증에 대한 관심이 높아지고 있습니다.',
    date: '2025-09-23',
    source: 'Tech News',
  },
  {
    id: 2,
    title: '미디어 리터러시 교육의 중요성 대두',
    summary:
      '정보 홍수 시대에 올바른 정보 판별 능력의 중요성이 강조되면서 미디어 리터러시 교육에 대한 관심이 증가하고 있습니다.',
    date: '2025-09-23',
    source: 'Education Today',
  },
  {
    id: 3,
    title: '디지털 뉴스 플랫폼의 진화',
    summary:
      '전통적인 뉴스 소비 패턴이 변화하면서 AI 기반 개인화 뉴스 서비스가 새로운 트렌드로 자리잡고 있습니다.',
    date: '2025-09-22',
    source: 'Digital Times',
  },
];

export default function TrendingSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-slate-900"
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-5xl font-bold text-center mb-20"
        >
          실시간 인기 급상승 뉴스에요
        </motion.h2>

        {/* 카테고리 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700">
            <ul className="flex gap-2">
              {categories.map((category, index) => (
                <li key={category.id}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === index
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    {category.name}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === index ? 'bg-white/20' : 'bg-gray-600'
                      }`}
                    >
                      {category.count}
                    </span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 뉴스 카드 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group"
            >
              {/* 이미지 영역 */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 텍스트 콘텐츠 */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-bold leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* 하단 정보 */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.source}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors duration-200"
                  >
                    MORE
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
