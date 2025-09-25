'use client';

import type { Charts } from '@/types/analysis/analysis';

type Props = {
  charts?: Charts;
};

export default function ResultsCharts({ charts }: Props) {
  return (
    <div className="w-full">
      {charts?.sentimentDonut ? (
        <pre className="p-4 rounded bg-[#151923] overflow-auto mb-4">
          {JSON.stringify(charts.sentimentDonut, null, 2)}
        </pre>
      ) : null}
      {charts?.keywordTreemap ? (
        <pre className="p-4 rounded bg-[#151923] overflow-auto mb-4">
          {JSON.stringify(charts.keywordTreemap, null, 2)}
        </pre>
      ) : null}
      {charts?.networkChart ? (
        <pre className="p-4 rounded bg-[#151923] overflow-auto">
          {JSON.stringify(charts.networkChart, null, 2)}
        </pre>
      ) : null}
    </div>
  );
}
