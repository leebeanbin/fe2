import React from 'react';
import styles from './SocialLoginButton.module.css';

interface SocialLoginButtonProps {
  types: 'google' | 'kakao';
  onClick: () => void;
}

const SocialLoginButton = ({ types, onClick }: SocialLoginButtonProps) => {
  const providerData = {
    google: {
      label: 'Google로 시작하기',
      icon: '/icons/google.svg',
    },
    kakao: {
      label: 'Kakao로 3초 만에 시작하기',
      icon: '/icons/kakao.svg',
    },
  };

  const { label } = providerData[types];

  return (
    <button className={styles.button} onClick={onClick} data-type={types}>
      <span>{label}</span>
    </button>
  );
};

export default SocialLoginButton;
