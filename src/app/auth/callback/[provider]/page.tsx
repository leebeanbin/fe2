// app/auth/callback/[provider]/page.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import api from '@/lib/axios';

export default function CallbackPage() {
  const { provider } = useParams<{ provider: 'google' | 'kakao' }>();
  const sp = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const redirectBase = process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI!;
  const redirect_uri = useMemo(
    () => `${redirectBase}/${provider}`,
    [redirectBase, provider]
  );

  useEffect(() => {
    const code = sp.get('code');
    const state = sp.get('state');
    const savedState = sessionStorage.getItem('oauth_state');

    (async () => {
      try {
        if (!code || !state) {
          throw new Error('필수 파라미터(code/state)가 없습니다.');
        }
        if (!savedState || savedState !== state) {
          throw new Error('CSRF 검증 실패: state 불일치');
        }

        const { data } = await api.post(
          `/api/v1/auth/social/${provider}/callback`,
          {
            code,
            state,
            redirect_uri,
          }
        );

        const { accessToken, refreshToken } = data.data;

        // 서버가 httpOnly 쿠키를 준다면 아래 localStorage는 생략 가능
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // 세션 정리
        sessionStorage.removeItem('oauth_state');

        router.replace('/'); // 필요한 곳으로 이동
      } catch (err: any) {
        setError(err.message || '로그인 처리 중 오류가 발생했습니다.');
      }
    })();
  }, [provider, sp, redirect_uri, router]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  return <p>로그인 처리 중...</p>;
}
