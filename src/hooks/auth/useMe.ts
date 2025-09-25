'use client';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const { data } = await api.get('/api/v1/auth/me');
      return data.data; // { id, name, email }
    },
    staleTime: 60_000,
    enabled: typeof window !== 'undefined',
  });
}
