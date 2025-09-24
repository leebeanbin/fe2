// app/login/page.tsx
'use client';
import React from 'react';
import styles from './login.module.css';
import Image from 'next/image';
import SocialLoginButton from '../components/socialloginbutton/SocialLoginButton';
import Link from 'next/link';
import { useSocialLogin } from '@/hooks/auth/useSocialLogin';

const Page = () => {
  // 예: http://localhost:3000/auth/callback  (뒤에 /{provider}를 붙여 사용)
  const redirectBase = process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI!;
  const { startLogin, loading, error } = useSocialLogin(redirectBase);

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Link href={'/'}>
          <Image
            alt="로고 이미지"
            src={'/branding/logo/facttory.svg'}
            width={97}
            height={84}
          />
          <span className={styles.logo}>Fact-tory</span>
        </Link>

        <span className={styles.text}>
          간편하게 로그인하고, 더욱 편하게 분석결과를 만나보세요
        </span>

        <div className={styles.buttons}>
          <SocialLoginButton
            types="google"
            onClick={() => startLogin('google')}
          />
          <SocialLoginButton
            types="kakao"
            onClick={() => startLogin('kakao')}
          />
        </div>

        {loading && <p>로그인 페이지로 이동 중...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Page;
