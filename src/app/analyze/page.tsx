'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import SidebarLayout from '@/components/Sidebar/SidebarLayout';
import Link from 'next/link';

export default function AnalyzePage() {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const router = useRouter();

  const validateUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);

    if (newUrl.trim() === '') {
      setIsValidUrl(true);
    } else {
      setIsValidUrl(validateUrl(newUrl));
    }
  };

  const handleAnalyze = () => {
    if (url.trim() && validateUrl(url)) {
      // 분석 시작 - 실제로는 API 호출 후 분석 결과 페이지로 이동
      const analysisId = Date.now().toString(); // 임시 ID
      router.push(`/analyzing?url=${encodeURIComponent(url)}&id=${analysisId}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  const sampleUrls = [
    'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=100&oid=001&aid=0014567890',
    'https://www.yna.co.kr/view/AKR20241201000000001',
    'https://www.chosun.com/politics/2024/12/01/ABCDEFGHIJ/',
    'https://www.donga.com/news/Politics/article/all/20241201/123456789/1',
  ];

  return (
    <SidebarLayout>
      <div className="content-area">
        {/* Section 01: 페이지 분석 헤더 */}
        <section className="section01">
          <div className="inner_size sec01_inner">
            <div className="sec01_left">
              <motion.h1
                className="sec01_left_tit"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                페이지 분석 <br />
                <span>URL Analysis</span>
              </motion.h1>

              <motion.p
                className="sec01_left_txt"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                분석하고 싶은 뉴스 기사의 URL을 입력하세요. <br />
                AI가 기사의 편향성과 팩트를 분석해드립니다. <br />
                정확하고 신뢰할 수 있는 분석 결과를 제공합니다.
              </motion.p>

              <motion.div
                className="main_searhbox"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <input
                  type="text"
                  placeholder="분석할 기사 URL을 입력하세요"
                  value={url}
                  onChange={handleUrlChange}
                  onKeyDown={handleKeyDown}
                  className={!isValidUrl ? 'error' : ''}
                />

                <button
                  className="star_btn_circle"
                  onClick={handleAnalyze}
                  disabled={!url.trim() || !isValidUrl}
                >
                  <span className="star_icon"></span>
                  <span className="star_text">분석하기</span>
                </button>
              </motion.div>

              {!isValidUrl && (
                <motion.p
                  className="error_message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  올바른 URL 형식을 입력해주세요
                </motion.p>
              )}

              <motion.div
                className="quick_actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/user-analytics" className="btn_secondary">
                  <span>내 분석 히스토리</span>
                </Link>
                <Link href="/" className="btn_tertiary">
                  <span>홈으로 돌아가기</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 02: 샘플 URL */}
        <section className="section02">
          <div className="inner_size sec02_inner">
            <motion.p
              className="sec02_tit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              샘플 URL로 체험해보세요
            </motion.p>

            <motion.div
              className="sample_urls"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {sampleUrls.map((sampleUrl, index) => (
                <motion.button
                  key={index}
                  className="sample_url_btn"
                  onClick={() => setUrl(sampleUrl)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="url_preview">
                    <div className="url_domain">
                      {new URL(sampleUrl).hostname}
                    </div>
                    <div className="url_path">
                      {sampleUrl.length > 60
                        ? sampleUrl.substring(0, 60) + '...'
                        : sampleUrl}
                    </div>
                  </div>
                  <div className="use_btn">
                    <span>사용하기</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 03: 분석 기능 소개 */}
        <section className="section03">
          <div className="inner_size sec03_inner">
            <motion.p
              className="main_tit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              우리가 분석하는 것들
            </motion.p>

            <motion.ul
              className="sec03_list_wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: '편향성 분석으로 균형 잡힌 시각을',
                  description:
                    '기사의 정치적 편향성을 정확히 분석하고\n좌편향, 우편향, 중립성을 수치로 제공합니다.\n객관적인 지표로 편향도를 확인하세요.',
                  image: '/img/main/img_sec02_01.png',
                },
                {
                  title: '팩트체킹으로 정확한 정보를',
                  description:
                    '사실과 의견을 명확히 구분하고\n검증된 데이터와 비교 분석합니다.\n신뢰할 수 있는 정보만을 선별해드립니다.',
                  image: '/img/main/img_sec02_02.png',
                },
                {
                  title: '감정 분석으로 논조를 파악해',
                  description:
                    '기사의 감정적 톤과 논조를 분석하고\n긍정, 부정, 중립적 표현을 구분합니다.\n숨겨진 의도와 관점을 드러냅니다.',
                  image: '/img/main/img_sec02_03.png',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="sec03_img">
                    <img src={item.image} alt="" />
                  </div>
                  <ul className="sec03_txtbox">
                    <li className="sec03_list_tit">
                      {item.title
                        .split(' ')
                        .map((word, i) =>
                          word.includes('편향성') ||
                          word.includes('팩트체킹') ||
                          word.includes('감정') ? (
                            <span key={i}>{word}</span>
                          ) : (
                            word
                          )
                        )
                        .reduce(
                          (prev: (string | JSX.Element)[], curr, i) => [
                            ...prev,
                            i === 0 ? '' : ' ',
                            curr,
                          ],
                          []
                        )}
                    </li>
                    <li className="sec03_list_txt">{item.description}</li>
                  </ul>
                  <span>{`0${index + 1}`}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}
