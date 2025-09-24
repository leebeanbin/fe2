import { serverApi, authHeaders } from '@/lib/serverApi';

export type ChartsFormat = 'highcharts' | 'd3' | 'raw' | 'none';

export type AnalysisQuery = {
  charts_format?: ChartsFormat;
  videos_limit?: number;
  include_content?: boolean;
};

export async function getAnalysisResultOnServer(
  analysisId: string,
  query?: AnalysisQuery,
  needAuth = true
) {
  const headers = needAuth ? await authHeaders() : undefined;
  const params = {
    charts_format: query?.charts_format ?? 'highcharts',
    videos_limit:
      typeof query?.videos_limit === 'number' ? query!.videos_limit : 5,
    include_content: query?.include_content ?? true,
  };

  const { data } = await serverApi.get(
    `/api/v1/analysis/result/${analysisId}`,
    {
      params,
      headers,
    }
  );

  return data; // { success: boolean, data:}
}
