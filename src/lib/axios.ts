import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://66ba4006-5930-4465-9bb9-4a763ac3aa9e.mock.pstmn.io',
  timeout: 5000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

export const publicApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://66ba4006-5930-4465-9bb9-4a763ac3aa9e.mock.pstmn.io',
  timeout: 5000,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
