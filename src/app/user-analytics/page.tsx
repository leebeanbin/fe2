'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

interface AnalysisHistory {
  id: string;
  title: string;
  url: string;
  bias: 'conservative' | 'neutral' | 'progressive';
  biasScore: number;
  factRatio: number;
  opinionRatio: number;
  analyzedAt: string;
  status: 'completed' | 'processing' | 'failed';
  category?: string;
}

export default function UserAnalyticsPage() {
  const userName = '사용자'; // 실제로는 인증된 사용자 정보에서 가져올 것

  // 임시 데이터 - 실제로는 API에서 가져올 데이터
  const [analysisHistory] = useState<AnalysisHistory[]>([
    {
      id: '1',
      title: '그동안 읽은 뉴스의 정치성향 내용 (도넛 차트)',
      url: 'https://example.com/news/1',
      bias: 'neutral',
      biasScore: 52,
      factRatio: 75,
      opinionRatio: 25,
      analyzedAt: '2024-01-15T10:30:00Z',
      status: 'completed',
      category: '정치',
    },
    {
      id: '2',
      title: '[카테고리] 내용의 뉴스를 즐겨 봤어요',
      url: 'https://example.com/news/2',
      bias: 'progressive',
      biasScore: 68,
      factRatio: 60,
      opinionRatio: 40,
      analyzedAt: '2024-01-14T15:45:00Z',
      status: 'completed',
      category: '경제',
    },
    {
      id: '3',
      title: '[주제] 관련된 뉴스를 가장 많이 봤어요',
      url: 'https://example.com/news/3',
      bias: 'conservative',
      biasScore: 71,
      factRatio: 80,
      opinionRatio: 20,
      analyzedAt: '2024-01-13T09:15:00Z',
      status: 'completed',
      category: '사회',
    },
    {
      id: '4',
      title: '[언론사의] 뉴스를 가장 많이 봤어요',
      url: 'https://example.com/news/4',
      bias: 'neutral',
      biasScore: 55,
      factRatio: 70,
      opinionRatio: 30,
      analyzedAt: '2024-01-12T14:20:00Z',
      status: 'completed',
      category: 'IT',
    },
  ]);

  const getBiasLabel = (bias: string) => {
    const labels = {
      conservative: '보수',
      neutral: '중립',
      progressive: '진보',
    };
    return labels[bias as keyof typeof labels] || bias;
  };

  const getBiasColor = (bias: string) => {
    const colors = {
      conservative: '#ef4444',
      neutral: '#6b7280',
      progressive: '#3b82f6',
    };
    return colors[bias as keyof typeof colors] || '#6b7280';
  };

  // Chart data configurations
  const doughnutData = {
    labels: ['진보', '중립', '보수'],
    datasets: [
      {
        data: [28, 44, 28],
        backgroundColor: ['#3b82f6', '#6b7280', '#ef4444'],
        borderColor: ['#60a5fa', '#9ca3af', '#f87171'],
        borderWidth: 2,
        hoverBackgroundColor: ['#2563eb', '#374151', '#dc2626'],
        hoverBorderWidth: 3,
      },
    ],
  };

  const barData = {
    labels: ['정치', '경제', '사회', '국제', 'IT'],
    datasets: [
      {
        label: '읽은 기사 수',
        data: [23, 18, 15, 12, 8],
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderColor: '#6366f1',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(99, 102, 241, 0.9)',
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '신뢰도 지수',
        data: [65, 72, 68, 78, 82, 89],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#6366f1',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart' as const,
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#ffffff',
          font: { size: 12 },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
    animation: {
      duration: 1500,
      animateRotate: true,
    },
    cutout: '60%',
  };

  return (
    <PageLayout>
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
            className="text-center mb-16"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#a5b4fc' }}
                    >
                      개인 분석 대시보드
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
                  안녕하세요,{' '}
                  <span style={{ color: '#6366f1' }}>{userName}</span>님
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
                >
                  당신의 뉴스 읽기 패턴을 AI가 분석했습니다.
                  <br />
                  객관적인 시각으로 정보를 바라보는 여정을 시작해보세요.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
                      새로운 분석 시작
                    </div>
                  </button>
                  <button className="group px-8 py-4 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      전체 히스토리 보기
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {analysisHistory.slice(0, 4).map((item, index) => {
              const cardColors = [
                {
                  bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  border: 'rgba(99, 102, 241, 0.3)',
                  accent: '#6366f1',
                },
                {
                  bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)',
                  border: 'rgba(236, 72, 153, 0.3)',
                  accent: '#ec4899',
                },
                {
                  bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  border: 'rgba(6, 182, 212, 0.3)',
                  accent: '#06b6d4',
                },
                {
                  bg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                  border: 'rgba(168, 85, 247, 0.3)',
                  accent: '#a855f7',
                },
              ];

              const icons = [
                <svg
                  key="chart"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>,
                <svg
                  key="category"
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
                </svg>,
                <svg
                  key="topic"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>,
                <svg
                  key="media"
                  className="w-7 h-7"
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
                </svg>,
              ];

              return (
                <motion.div
                  key={item.id}
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
                      background: cardColors[index].bg,
                      borderColor: cardColors[index].border,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Floating Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${cardColors[index].accent}40, ${cardColors[index].accent}20)`,
                          border: `1px solid ${cardColors[index].accent}30`,
                        }}
                      >
                        <div style={{ color: cardColors[index].accent }}>
                          {icons[index]}
                        </div>
                      </div>

                      {/* Trend Indicator */}
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
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                        <span className="text-xs font-medium text-green-400">
                          +12%
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white leading-tight line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <span className="text-2xl font-bold text-white">
                            {item.biasScore}%
                          </span>
                          <div
                            className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                            style={{
                              backgroundColor: `${getBiasColor(item.bias)}30`,
                              color: getBiasColor(item.bias),
                              border: `1px solid ${getBiasColor(item.bias)}40`,
                            }}
                          >
                            {getBiasLabel(item.bias)}
                          </div>
                        </div>

                        {/* Mini Chart Visualization */}
                        <div className="w-12 h-8 relative">
                          <div className="absolute inset-0 flex items-end gap-1">
                            {[65, 45, 78, 55, 82].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm transition-all duration-500 group-hover:opacity-80"
                                style={{
                                  height: `${height}%`,
                                  background: `linear-gradient(to top, ${cardColors[index].accent}60, ${cardColors[index].accent})`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${cardColors[index].accent}05, transparent)`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Analytics Dashboard with Charts */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-300">
                  AI 인사이트 분석
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-4">
                상세 분석 결과
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Chart.js를 활용한 인터랙티브 차트로 뉴스 읽기 패턴을
                분석해보세요
              </p>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Political Bias Doughnut Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                style={{ background: 'rgba(15, 15, 35, 0.6)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    정치성향 분석
                  </h3>
                </div>
                <div className="h-64 relative">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
                <p className="text-sm text-slate-400 mt-4 text-center">
                  그동안 읽은 뉴스의 정치적 성향 분포
                </p>
              </motion.div>

              {/* Category Bar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                style={{ background: 'rgba(15, 15, 35, 0.6)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    카테고리별 분석
                  </h3>
                </div>
                <div className="h-64 relative">
                  <Bar data={barData} options={chartOptions} />
                </div>
                <p className="text-sm text-slate-400 mt-4 text-center">
                  카테고리별 읽은 뉴스 기사 수
                </p>
              </motion.div>

              {/* Trust Index Line Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                style={{ background: 'rgba(15, 15, 35, 0.6)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">신뢰도 변화</h3>
                </div>
                <div className="h-64 relative">
                  <Line data={lineData} options={chartOptions} />
                </div>
                <p className="text-sm text-slate-400 mt-4 text-center">
                  월별 뉴스 신뢰도 지수 변화
                </p>
              </motion.div>
            </div>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              style={{ background: 'rgba(15, 15, 35, 0.6)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">
                    89%
                  </div>
                  <p className="text-sm text-slate-400">현재 신뢰도 지수</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    76
                  </div>
                  <p className="text-sm text-slate-400">총 분석 기사 수</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    +23%
                  </div>
                  <p className="text-sm text-slate-400">신뢰도 향상률</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    44%
                  </div>
                  <p className="text-sm text-slate-400">중립적 뉴스 비율</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Advanced News Analysis Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                상세 분석 리포트
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                최근 분석한 뉴스의 패턴과 인사이트를 확인하세요
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Recent News Feed */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                style={{ background: 'rgba(15, 15, 35, 0.6)' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      최근 분석 뉴스
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                    실시간 업데이트
                  </div>
                </div>

                <div className="space-y-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="group flex items-start gap-4 p-4 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    >
                      {/* Status Indicator */}
                      <div className="flex flex-col items-center gap-2 pt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-400 animate-pulse' : 'bg-slate-600'}`}
                        ></div>
                        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-white truncate">
                            정치 뉴스 분석 #{i + 1} - 편향성 검증 완료
                          </span>
                          {i === 0 && (
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          AI 분석 결과 중립성 67%, 신뢰도 89%로 측정됨
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-slate-500">
                            {i + 1}분 전
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            <span className="text-xs text-blue-400">
                              진행중
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                        <svg
                          className="w-4 h-4 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Analysis Insights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                style={{ background: 'rgba(15, 15, 35, 0.6)' }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI 분석 인사이트
                  </h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      category: '편향성 패턴',
                      insight: '최근 7일간 중립적 보도가 23% 증가했습니다',
                      trend: 'up',
                      color: 'emerald',
                    },
                    {
                      category: '감정 분석',
                      insight: '부정적 키워드 사용이 15% 감소하는 추세입니다',
                      trend: 'down',
                      color: 'blue',
                    },
                    {
                      category: '신뢰도 지수',
                      insight: '팩트체킹 통과율이 평균 78%로 상승했습니다',
                      trend: 'up',
                      color: 'violet',
                    },
                    {
                      category: '다양성 지수',
                      insight: '다양한 관점의 뉴스 소비가 증가하고 있습니다',
                      trend: 'up',
                      color: 'cyan',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div
                        className="p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
                        style={{
                          background: `rgba(${item.color === 'emerald' ? '16, 185, 129' : item.color === 'blue' ? '59, 130, 246' : item.color === 'violet' ? '139, 92, 246' : '6, 182, 212'}, 0.1)`,
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-medium text-slate-300">
                            {item.category}
                          </span>
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                            ${
                              item.trend === 'up'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            <svg
                              className={`w-3 h-3 ${item.trend === 'up' ? 'rotate-0' : 'rotate-180'}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                              />
                            </svg>
                            {item.trend === 'up' ? '+' : '-'}
                          </div>
                        </div>
                        <p className="text-sm text-white leading-relaxed">
                          {item.insight}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="backdrop-blur-xl border border-white/10 rounded-3xl p-12"
              style={{ background: 'rgba(15, 15, 35, 0.6)' }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                더 정확한 분석이 필요하신가요?
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                AI 기반 뉴스 분석으로 편향되지 않은 관점을 얻어보세요.
                실시간으로 업데이트되는 분석 결과를 확인할 수 있습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/analyze"
                  className="group relative px-10 py-5 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-purple-700 transition-all duration-300 group-hover:from-violet-500 group-hover:via-purple-500 group-hover:to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5 transition-transform group-hover:scale-110"
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
                    새로운 뉴스 분석하기
                  </div>
                </Link>

                <Link
                  href="/user-analytics"
                  className="px-10 py-5 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
                >
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    전체 분석 히스토리
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
