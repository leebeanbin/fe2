import axios from 'axios';
import { cookies } from 'next/headers';

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

export async function authHeaders(): Promise<
  Record<string, string> | undefined
> {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  return token ? { Authorization: `Bearer ${token}` } : undefined;
}
