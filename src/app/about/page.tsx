'use client';

import { motion } from 'framer-motion';
import SidebarLayout from '@/components/Sidebar/SidebarLayout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div
        className="min-h-screen"
        style={{
          background:
            'linear-gradient(135deg, #1e1b4b 0%, #0f0f23 50%, #000000 100%)',
        }}
      >
        {/* Subtle Aura Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10"
            style={{
              background: 'radial-gradient(circle, #6366f1, transparent 70%)',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Modern Header with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
            className="text-center mb-20"
          >
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background:
                    'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
                }}
              ></div>
              <div
                className="relative backdrop-blur-xl border border-white/10 rounded-3xl p-12"
                style={{ background: 'rgba(15, 15, 35, 0.8)' }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <div
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20"
                    style={{ background: 'rgba(99, 102, 241, 0.1)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: '#6366f1' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#a5b4fc' }}
                    >
                      About Fact-tory
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                  style={{
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  뉴스 편향성 분석 AI <br />
                  <span className="gradient-brand">Fact-tory</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                  인공지능을 활용하여 뉴스의 편향성을 분석하고
                  <br />
                  균형 잡힌 정보 소비 문화를 만들어가는 혁신적인 플랫폼입니다.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    href="/analyze"
                    className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500"></div>
                    <div className="relative flex items-center justify-center gap-2">
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      지금 시작하기
                    </div>
                  </Link>
                  <Link
                    href="/user-analytics"
                    className="group px-8 py-4 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  >
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      분석 결과 보기
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features Section with Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 mb-6"
                style={{ background: 'rgba(99, 102, 241, 0.1)' }}
              >
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-300">
                  핵심 기능
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-4">주요 기능</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                AI 기반 뉴스 분석의 핵심 기능들을 살펴보세요
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  ),
                  title: '편향성 분석',
                  description:
                    'AI가 기사의 정치적 편향성을 분석하여 보수, 중립, 진보 성향을 수치화합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: 'rgba(99, 102, 241, 0.3)',
                    accent: '#6366f1',
                  },
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                  title: '사실/의견 구분',
                  description:
                    '기사 내용 중 사실과 의견을 구분하여 객관적 정보 비율을 제공합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: 'rgba(34, 197, 94, 0.3)',
                    accent: '#22c55e',
                  },
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  ),
                  title: '키워드 분석',
                  description:
                    '기사의 핵심 키워드를 추출하고 문맥 속에서의 의미를 분석합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(251, 146, 60, 0.1) 100%)',
                    border: 'rgba(249, 115, 22, 0.3)',
                    accent: '#f97316',
                  },
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4z"
                      />
                    </svg>
                  ),
                  title: '관련 영상 추천',
                  description:
                    '분석한 기사와 관련된 유튜브 영상을 추천하여 다양한 관점을 제공합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(248, 113, 113, 0.1) 100%)',
                    border: 'rgba(239, 68, 68, 0.3)',
                    accent: '#ef4444',
                  },
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.25, 0, 1],
                  }}
                  className="group relative overflow-hidden"
                >
                  {/* Card Background with Glassmorphism */}
                  <div
                    className="backdrop-blur-xl border rounded-3xl p-6 h-full transition-all duration-500 group-hover:border-opacity-60"
                    style={{
                      background: feature.color.bg,
                      borderColor: feature.color.border,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Floating Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color.accent}40, ${feature.color.accent}20)`,
                          border: `1px solid ${feature.color.accent}30`,
                        }}
                      >
                        <div style={{ color: feature.color.accent }}>
                          {feature.icon}
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <div
                        className="flex items-center gap-1 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
                        style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <svg
                          className="w-3 h-3 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs font-medium text-green-400">
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color.accent}05, transparent)`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section with Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 mb-6"
                style={{ background: 'rgba(99, 102, 241, 0.1)' }}
              >
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-300">
                  개발팀
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-4">우리 팀</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                각 분야 전문가들이 모여 만들어가는 혁신적인 뉴스 분석 플랫폼
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                  title: 'Frontend 개발',
                  description: '사용자 인터페이스 및 UX/UI 설계를 담당합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: 'rgba(99, 102, 241, 0.3)',
                    accent: '#6366f1',
                  },
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  title: 'AI 엔지니어',
                  description:
                    '머신러닝 모델 개발 및 자연어 처리를 담당합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: 'rgba(168, 85, 247, 0.3)',
                    accent: '#a855f7',
                  },
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  ),
                  title: 'Backend 개발',
                  description: '서버 아키텍처 및 API 개발을 담당합니다.',
                  color: {
                    bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: 'rgba(34, 197, 94, 0.3)',
                    accent: '#22c55e',
                  },
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.25, 0, 1],
                  }}
                  className="group relative overflow-hidden"
                >
                  <div
                    className="backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-opacity-60 text-center"
                    style={{
                      background: member.color.bg,
                      borderColor: member.color.border,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${member.color.accent}40, ${member.color.accent}20)`,
                        border: `1px solid ${member.color.accent}30`,
                      }}
                    >
                      <div style={{ color: member.color.accent }}>
                        {member.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                      {member.title}
                    </h4>
                    <p className="leading-relaxed text-slate-300">
                      {member.description}
                    </p>

                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${member.color.accent}05, transparent)`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div
              className="backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center"
              style={{ background: 'rgba(15, 15, 35, 0.6)' }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                함께 만들어가요
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                더 나은 뉴스 환경을 위한 여정에 함께해 주세요.
                <br />
                질문이나 제안이 있다면 언제든 연락주시기 바랍니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/facttory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub Repository
                  </div>
                </a>

                <a
                  href="mailto:contact@facttory.kr"
                  className="px-8 py-4 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
                >
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SidebarLayout>
  );
}
