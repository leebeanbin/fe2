'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const apiCompanies = [
  {
    name: 'Daum',
    logo: '/img/main/img_daum_logo.png',
    url: 'https://news.daum.net',
  },
  {
    name: 'Google',
    logo: '/img/main/img_google_logo.png',
    url: 'https://news.google.com',
  },
  {
    name: 'Naver',
    logo: '/img/main/img_naver_logo.png',
    url: 'https://news.naver.com',
  },
];

export default function APISection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-slate-900"
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-3xl font-semibold text-center mb-16"
        >
          Fact-tory AI와 함께하는 API 회사를 불러왔어요
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-20"
        >
          {apiCompanies.map((company, index) => (
            <motion.li
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-32 h-16 relative flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
