import { serverApi, authHeaders } from '@/lib/serverApi';
import api from '@/lib/axios';

type Params = {
  realtime_limit?: number;
  trending_limit?: number;
  category_limit?: number;
  search_limit?: number;
};

export async function getMainDashboardOnServer(
  params?: Params,
  needAuth = false
) {
  const headers = needAuth ? await authHeaders() : undefined;
  const { data } = await serverApi.get('/api/v1/dashboard/main', {
    params,
    headers,
  });
  return data;
}

export async function getMainDashboardOnClient(params?: Params) {
  const { data } = await api.get('/api/v1/dashboard/main', { params });
  return data;
}
