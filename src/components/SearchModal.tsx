'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 모달이 열릴 때 input에 포커스
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // 검색 실행 함수
  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // 실제 뉴스 데이터를 기반으로 검색
    setTimeout(() => {
      const allNewsData = [
        // 정치 뉴스
        {
          id: 1,
          title: "대통령실 '정치적 편향성 논란' 해명 발표",
          content:
            'AI 분석 결과 중립적 표현 대신 감정적 표현이 47% 증가한 것으로 나타남',
          date: '2025-07-20',
          source: '연합뉴스',
          category: '정치',
        },
        {
          id: 2,
          title: "국정감사 질의서 '편향 표현' 논란 확산",
          content:
            '여야 의원들의 질의서에서 감정적 표현과 편향된 시각이 두드러지게 나타남',
          date: '2025-07-20',
          source: '중앙일보',
          category: '정치',
        },
        {
          id: 3,
          title: '정당별 보도자료 편향성 점수 공개',
          content:
            'AI가 분석한 각 정당 보도자료의 편향성 점수가 처음으로 공개됨',
          date: '2025-07-20',
          source: '조선일보',
          category: '정치',
        },
        // 경제 뉴스
        {
          id: 4,
          title: "경제 정책 보도 '좌편향' vs '우편향' 분석 결과",
          content:
            '주요 언론사별 경제 정책 보도 편향성 분석에서 명확한 차이 발견',
          date: '2025-07-20',
          source: '매일경제',
          category: '경제',
        },
        {
          id: 5,
          title: '부동산 정책 보도의 감정적 표현 사용 급증',
          content:
            '부동산 관련 뉴스에서 객관적 수치보다 감정적 표현이 68% 증가',
          date: '2025-07-20',
          source: '한국경제',
          category: '경제',
        },
        // 사회 뉴스
        {
          id: 6,
          title: '온라인 댓글 감정 분석으로 본 여론 동향',
          content: 'SNS와 뉴스 댓글 분석 결과 부정적 감정 표현이 68% 증가',
          date: '2025-07-20',
          source: '동아일보',
          category: '사회',
        },
        {
          id: 7,
          title: '의료진 파업 보도, 찬반 논조 극명한 대립',
          content:
            '의료진 집단행동에 대한 언론 보도에서 찬성과 반대 논조가 극명하게 갈림',
          date: '2025-07-20',
          source: '중앙일보',
          category: '사회',
        },
        // 국제 뉴스
        {
          id: 8,
          title: '미중 갈등 보도, 한국 언론의 편향성 분석',
          content:
            '미중 관계 보도에서 친미 vs 친중 성향 언론사별 차이가 뚜렷하게 나타남',
          date: '2025-07-20',
          source: '연합뉴스',
          category: '국제',
        },
        {
          id: 9,
          title: '일본 관련 뉴스의 감정적 표현 사용 실태',
          content:
            '한일 관계 뉴스에서 감정적 표현이 객관적 사실 전달보다 우선시되는 경향',
          date: '2025-07-20',
          source: '조선일보',
          category: '국제',
        },
      ];

      // 검색어가 포함된 뉴스 필터링
      const filteredResults = allNewsData.filter(
        news =>
          news.title.toLowerCase().includes(query.toLowerCase()) ||
          news.content.toLowerCase().includes(query.toLowerCase()) ||
          news.source.toLowerCase().includes(query.toLowerCase()) ||
          news.category.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 500);
  };

  // 검색어 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* 모달 */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 60,
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '85vh',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
              }}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  zIndex: 20,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={e => (e.target.style.backgroundColor = '#f3f4f6')}
                onMouseLeave={e =>
                  (e.target.style.backgroundColor = 'transparent')
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* 모달 헤더 */}
              <div className="text-center p-8 pb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: '#6366f1' }}
                  >
                    분석했던 기사 제목을 검색하세요
                  </h2>
                </div>
                <p className="text-gray-600 text-sm">
                  기사 제목 중 생각나는 단어를 입력하세요
                </p>
              </div>

              {/* 검색 입력 */}
              <div className="px-8 pb-6">
                <div className="flex gap-3 items-stretch">
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="키워드, 기사 제목, 언론사명으로 검색..."
                      value={searchQuery}
                      onChange={handleInputChange}
                      className="modal_search_input"
                    />
                    {isSearching && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div
                          className="w-5 h-5 border-2 border-t-transparent
                                    rounded-full animate-spin"
                          style={{
                            borderColor: '#6366f1',
                            borderTopColor: 'transparent',
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleSearch(searchQuery)}
                    className="modal_search_btn"
                  >
                    <span>검색하기</span>
                  </button>
                </div>
              </div>

              {/* 검색 결과 */}
              <div className="flex-1 overflow-y-auto px-8 pb-8">
                {searchQuery && !isSearching && searchResults.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="mx-auto mb-4 opacity-50"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>검색 결과가 없습니다.</p>
                    <p className="text-sm mt-1">다른 키워드로 검색해보세요.</p>
                  </div>
                )}

                {!searchQuery && (
                  <div className="text-center py-12 text-gray-400">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="mx-auto mb-4 opacity-50"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>기사 제목이나 키워드를 입력해주세요.</p>
                    <p className="text-sm mt-1">
                      분석된 기사들을 검색할 수 있습니다.
                    </p>
                  </div>
                )}

                {searchResults.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-sm font-medium text-gray-500">
                        TOTAL
                      </span>
                      <span
                        className="text-lg font-bold"
                        style={{ color: '#6366f1' }}
                      >
                        {searchResults.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {searchResults.map(result => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border border-gray-100 bg-gray-50 hover:bg-gray-100
                                 transition-colors rounded-lg p-4 cursor-pointer"
                        >
                          {/* 상단: 언론사(왼쪽) + 날짜(오른쪽) */}
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="text-xs font-medium px-2 py-1 rounded"
                              style={{
                                color: '#6366f1',
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                              }}
                            >
                              {result.source}
                            </span>
                            <span className="text-xs text-gray-500">
                              {result.date}
                            </span>
                          </div>

                          {/* 제목 */}
                          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 transition-colors leading-relaxed hover-title">
                            {searchQuery.trim()
                              ? result.title
                                  .split(searchQuery)
                                  .map((part, index, array) => (
                                    <span key={index}>
                                      {part}
                                      {index < array.length - 1 && (
                                        <span
                                          className="font-semibold px-1 rounded"
                                          style={{
                                            color: '#e265ff',
                                            backgroundColor:
                                              'rgba(226, 101, 255, 0.15)',
                                          }}
                                        >
                                          {searchQuery}
                                        </span>
                                      )}
                                    </span>
                                  ))
                              : result.title}
                          </h3>

                          {/* 내용 */}
                          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                            {result.content}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
