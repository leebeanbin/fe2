// hooks/auth/useSocialLogin.ts
'use client';
import { useState } from 'react';
import api from '@/lib/axios';

type Provider = 'google' | 'kakao';

export function useSocialLogin(redirectBase: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startLogin = async (provider: Provider) => {
    try {
      setLoading(true);
      setError(null);

      const redirect_uri = `${window.location.origin}${redirectBase}/${provider}`; // 현재 도메인과 포트 사용

      const { data } = await api.get(`/api/v1/auth/social/${provider}/url`, {
        params: { redirect_uri },
        withCredentials: false,
      });

      const { loginUrl, state } = data.data;
      sessionStorage.setItem('oauth_state', state); // 콜백에서 검증용
      window.location.href = loginUrl; // 프로바이더로 이동
    } catch (e: any) {
      const msg =
        e?.response?.data?.error?.message ||
        e?.message ||
        '로그인 URL 생성에 실패했습니다.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return { startLogin, loading, error };
}
