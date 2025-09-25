export const tokenStore = {
  getAccess: () =>
    typeof window !== 'undefined' ? localStorage.getItem('at') : null,
  getRefresh: () =>
    typeof window !== 'undefined' ? localStorage.getItem('rt') : null,
  set: (at: string, rt?: string) => {
    localStorage.setItem('at', at);
    if (rt) localStorage.setItem('rt', rt);
  },
  clear: () => {
    localStorage.removeItem('at');
    localStorage.removeItem('rt');
  },
};

export const oauthState = {
  key: 'oauth_state',
  save: (state: string, expiresInSec: number) => {
    localStorage.setItem(
      'oauth_state',
      JSON.stringify({ state, exp: Date.now() + expiresInSec * 1000 })
    );
  },
  read: (): { state: string; exp: number } | null => {
    const raw = localStorage.getItem('oauth_state');
    if (!raw) return null;
    try {
      const obj = JSON.parse(raw);
      if (Date.now() > obj.exp) return null;
      return obj;
    } catch {
      return null;
    }
  },
  clear: () => localStorage.removeItem('oauth_state'),
};
