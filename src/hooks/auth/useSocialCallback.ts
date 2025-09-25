'use client';

import { useMutation } from '@tanstack/react-query';
import api from '@/lib/axios';
import { oauthState, tokenStore } from '@/lib/authStorage';

type Provider = 'kakao' | 'google';

export function useSocialCallback(provider: Provider) {
  return useMutation({
    mutationFn: async (body: {
      code: string;
      state: string;
      redirect_uri: string;
    }) => {
      const saved = oauthState.read();
      if (!saved || saved.state !== body.state) {
        throw new Error('CSRF 검증 실패: state 불일치');
      }

      const { data } = await api.post(
        `/api/v1/auth/social/${provider}/callback`,
        body
      );
      return data.data as {
        accessToken: string;
        refreshToken: string;
        user: any;
        sessionInfo: { sessionId: string; expiresAt: string };
      };
    },
    onSuccess: res => {
      tokenStore.set(res.accessToken, res.refreshToken);
      oauthState.clear();
    },
  });
}
