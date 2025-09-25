// src/types/auth.ts
export type Provider = 'kakao' | 'google';

export interface SocialLoginUrlRes {
  success: boolean;
  data: {
    loginUrl: string;
    state: string;
    expiresIn: number; // seconds
  };
}
