'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import { newsData, trendingNewsData, NewsItem } from '@/data/newsData';

const categories = ['정치', '경제', '사회', '국제'] as const;
type Category = (typeof categories)[number];

interface NewsSectionProps {
  initialCategory?: Category;
}

export default function NewsSection({
  initialCategory = '정치',
}: NewsSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<Category>(initialCategory);

  const renderNewsItem = (news: NewsItem, index: number) => (
    <motion.div
      key={index}
      className="news-item"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="news-item-inner">
        <div className="sec04_img">
          <Image
            src={news.image}
            alt={news.title}
            width={90}
            height={65}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="sec04_content_area">
          <h3 className="sec04_tit">{news.title}</h3>
          <p className="sec04_txt">{news.content}</p>
        </div>
        <div className="sec04_txt_bott">
          <ul className="sec04_new_ect">
            <li>{news.source}</li>
            <li>{news.date}</li>
          </ul>
          <button className="se04_more_btn">
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="section04 relative z-10">
      <div className="inner_size sec04_inner">
        <motion.p
          className="main_tit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          실시간 인기 급상승 뉴스에요
        </motion.p>

        {/* 카테고리 탭 */}
        <motion.div
          className="sec04_tab_wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="sec04_tab">
            {categories.map(category => (
              <li
                key={category}
                className={activeCategory === category ? 'on' : ''}
              >
                <button
                  onClick={() => setActiveCategory(category)}
                  className="w-full text-left"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 좌우 분할 뉴스 영역 */}
        <motion.div
          className="sec04_news_container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* 왼쪽: 실시간 뉴스 */}
          <div className="sec04_news_section">
            <h3 className="sec04_section_title">실시간 뉴스</h3>
            <div className="sec04_news_list">
              {newsData[activeCategory]
                .slice(0, 6)
                .map((news, index) => renderNewsItem(news, index))}
            </div>

            {/* Google News 스타일 하단 Coverage 버튼 */}
            <div className="sec04_coverage_area">
              <button className="sec04_full_coverage_btn">
                <span>Full Coverage</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 오른쪽: 급상승 뉴스 */}
          <div className="sec04_news_section">
            <h3 className="sec04_section_title">급상승 뉴스</h3>
            <div className="sec04_news_list">
              {trendingNewsData[activeCategory].map((news, index) =>
                renderNewsItem(news, index)
              )}
            </div>

            {/* Google News 스타일 하단 Coverage 버튼 */}
            <div className="sec04_coverage_area">
              <button className="sec04_full_coverage_btn">
                <span>Full Coverage</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
