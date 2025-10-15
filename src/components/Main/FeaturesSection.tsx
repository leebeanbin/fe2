'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: '뉴스 안에 숨은 방향을 짚어줘요',
    description:
      'AI가 뉴스의 숨겨진 편향성을 분석하고\n객관적인 관점을 제공합니다.\n다양한 시각으로 뉴스를 바라보세요.',
    image: '/img/main/img_sec02_01.png',
  },
  {
    title: '실시간 팩트체킹으로 정확성을 보장해요',
    description:
      '신뢰할 수 있는 소스에서 정보를 수집하고\n실시간으로 팩트체킹을 진행합니다.\n정확한 정보만을 선별해드립니다.',
    image: '/img/main/img_sec02_02.png',
  },
  {
    title: '균형 잡힌 관점으로 이해를 도와요',
    description:
      '한쪽으로 치우치지 않은 균형 잡힌\n관점으로 뉴스를 분석합니다.\n다양한 의견을 종합적으로 제공합니다.',
    image: '/img/main/img_sec02_03.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section03 relative z-10">
      <div className="inner_size sec03_inner">
        <motion.p
          className="main_tit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          뉴스를 더 쉽게, 더 균형 있게
        </motion.p>

        <motion.ul
          className="sec03_list_wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="sec03_img">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={98}
                  height={98}
                  priority={index === 0}
                />
              </div>
              <ul className="sec03_txtbox">
                <li className="sec03_list_tit">
                  {item.title
                    .split(' ')
                    .map((word, i) =>
                      word.includes('방향') ||
                      word.includes('정확성') ||
                      word.includes('관점') ? (
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
  );
}
