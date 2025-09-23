'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: '뉴스 안에 숨은 방향을 짚어줘요',
    description:
      'AI 기술을 활용하여 뉴스 기사의 숨겨진 편향성과 의도를 정확하게 분석하고 시각화하여 제공합니다.',
    image: '/img/main/img_sec02_01.png',
    number: '01',
  },
  {
    id: 2,
    title: '균형잡힌 정보로 판단을 도와요',
    description:
      '다양한 관점의 뉴스를 종합하여 균형잡힌 시각으로 사안을 바라볼 수 있도록 도움을 드립니다.',
    image: '/img/main/img_sec02_02.png',
    number: '02',
  },
  {
    id: 3,
    title: '신뢰할 수 있는 분석 결과',
    description:
      '검증된 AI 모델과 데이터를 통해 신뢰할 수 있는 분석 결과를 제공하여 정확한 정보 판단을 돕습니다.',
    image: '/img/main/img_sec02_03.png',
    number: '03',
  },
];

export default function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-slate-800"
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-5xl font-bold text-center mb-20"
        >
          뉴스를 더 쉽게, 더 균형 있게
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.li
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              className="relative group"
            >
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-500 hover:bg-slate-700/70 group-hover:transform group-hover:scale-105">
                {/* 이미지 영역 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 relative overflow-hidden rounded-2xl"
                >
                  <div className="w-full h-48 relative bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={280}
                      height={180}
                      className="object-contain opacity-80"
                    />
                  </div>
                </motion.div>

                {/* 텍스트 영역 */}
                <div className="relative">
                  <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                    {feature.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {word.includes('방향') ||
                        word.includes('균형') ||
                        word.includes('신뢰') ? (
                          <span className="text-purple-400">{word}</span>
                        ) : (
                          word
                        )}
                        {i < feature.title.split(' ').length - 1 ? ' ' : ''}
                      </span>
                    ))}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* 번호 표시 */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {feature.number}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
