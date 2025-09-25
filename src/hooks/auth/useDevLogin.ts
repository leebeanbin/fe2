import axios from '@/lib/axios';

export async function devLogin() {
  const { data } = await axios.post('/api/v1/auth/dev/login', {
    username: 'tester@local.dev',
    role: 'ROLE_USER',
    setCookie: false,
  });
  localStorage.setItem('accessToken', data.data.accessToken);
}
