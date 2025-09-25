'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import SidebarLayout from '@/components/Sidebar/SidebarLayout';

function AnalyzingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisUrl, setAnalysisUrl] = useState('');

  const steps = [
    {
      id: 0,
      name: '기사 내용 추출',
      description: 'URL에서 기사 텍스트를 추출하고 있습니다',
    },
    {
      id: 1,
      name: '편향성 분석',
      description: 'AI가 기사의 정치적 편향성을 분석하고 있습니다',
    },
    {
      id: 2,
      name: '팩트체킹',
      description: '사실과 의견을 구분하고 검증하고 있습니다',
    },
    {
      id: 3,
      name: '감정 분석',
      description: '기사의 감정적 톤과 논조를 분석하고 있습니다',
    },
    {
      id: 4,
      name: '키워드 추출',
      description: '핵심 키워드와 주제를 추출하고 있습니다',
    },
    {
      id: 5,
      name: '최종 분석',
      description: '모든 분석 결과를 종합하고 있습니다',
    },
  ];

  useEffect(() => {
    // URL 파라미터에서 분석 정보 가져오기
    const url = searchParams.get('url');
    const id = searchParams.get('id');

    if (url) setAnalysisUrl(decodeURIComponent(url));

    // 진행률 시뮬레이션
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // 분석 완료 후 결과 페이지로 이동
          setTimeout(() => {
            router.push(`/analysis/${id || 'sample'}`);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 800);

    // 단계 업데이트
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [router, searchParams, steps.length]);

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return 'Unknown';
    }
  };

  return (
    <SidebarLayout>
      <div className="content-area">
        {/* Section 01: 분석중 헤더 */}
        <section className="section01">
          <div className="inner_size sec01_inner">
            <div className="sec01_left">
              <motion.h1
                className="sec01_left_tit"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                분석중입니다 <br />
                <span>Analyzing...</span>
              </motion.h1>

              <motion.p
                className="sec01_left_txt"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                AI가 기사를 정밀하게 분석하고 있습니다. <br />
                편향성, 팩트체킹, 감정분석을 통해 <br />
                객관적이고 신뢰할 수 있는 결과를 제공합니다.
              </motion.p>

              {analysisUrl && (
                <motion.div
                  className="analysis_info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="url_info">
                    <div className="url_domain">{getDomain(analysisUrl)}</div>
                    <div className="url_text">
                      {analysisUrl.length > 80
                        ? analysisUrl.substring(0, 80) + '...'
                        : analysisUrl}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Section 02: 진행률 표시 */}
        <section className="section02">
          <div className="inner_size sec02_inner">
            <motion.div
              className="progress_container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="progress_header">
                <h2>분석 진행률</h2>
                <div className="progress_percent">{Math.round(progress)}%</div>
              </div>

              <div className="progress_bar_container">
                <div className="progress_bar_bg">
                  <motion.div
                    className="progress_bar_fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="current_step">
                <motion.div
                  key={currentStep}
                  className="step_info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="step_name">{steps[currentStep]?.name}</div>
                  <div className="step_description">
                    {steps[currentStep]?.description}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 03: 분석 단계 */}
        <section className="section03">
          <div className="inner_size sec03_inner">
            <motion.p
              className="main_tit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              분석 단계
            </motion.p>

            <motion.div
              className="steps_container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`step_item ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="step_number">
                    {index < currentStep ? (
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          fill="currentColor"
                        />
                      </motion.svg>
                    ) : index === currentStep ? (
                      <motion.div
                        className="step_spinner"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="step_content">
                    <div className="step_title">{step.name}</div>
                    <div className="step_desc">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 04: 기다리는 동안 */}
        <section className="section04">
          <div className="inner_size sec04_inner">
            <motion.div
              className="waiting_content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>분석이 완료되면 자동으로 결과 페이지로 이동합니다</h3>
              <p>평균 분석 시간은 30초~1분 정도입니다.</p>

              <div className="tips">
                <h4>💡 분석 결과에서 확인할 수 있는 정보</h4>
                <ul>
                  <li>• 정치적 편향성 점수와 방향성</li>
                  <li>• 사실과 의견의 비율 분석</li>
                  <li>• 감정적 톤과 논조 평가</li>
                  <li>• 핵심 키워드와 주제 추출</li>
                  <li>• 신뢰도 및 객관성 지수</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}

export default function AnalyzingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnalyzingContent />
    </Suspense>
  );
}
