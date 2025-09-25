'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <motion.div
          className="login-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 로고 영역 */}
          <Link href="/" className="login-logo">
            <Image
              src="/img/web_favicon.ico"
              alt="Fact-tory 로고"
              width={97}
              height={84}
              className="logo-image"
            />
            <span className="logo-text">Fact-tory</span>
          </Link>

          {/* 메인 텍스트 */}
          <motion.div
            className="login-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>간편하게 로그인하고,</h1>
            <h2>더욱 편하게 분석결과를 만나보세요</h2>
          </motion.div>

          {/* 소셜 로그인 버튼들 */}
          <motion.div
            className="login-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="social-login-btn google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google로 로그인</span>
            </button>

            <button className="social-login-btn kakao-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#3C1E1E"
                  d="M12 3C6.48 3 2 6.48 2 10.5c0 2.5 1.5 4.7 3.8 6.1L5 21l4.9-1.3c1.3.3 2.6.5 4.1.5 5.52 0 10-3.48 10-7.5S17.52 3 12 3z"
                />
              </svg>
              <span>카카오로 로그인</span>
            </button>
          </motion.div>

          {/* 추가 정보 */}
          <motion.div
            className="login-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>로그인하면 더 많은 기능을 이용할 수 있어요</p>
            <ul>
              <li>• 분석 결과 저장 및 관리</li>
              <li>• 개인화된 뉴스 추천</li>
              <li>• 분석 히스토리 확인</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
