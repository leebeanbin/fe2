'use client';

import PieChart from '@/components/charts/PieChart';
import BarChart from '@/components/charts/BarChart';
import NetworkGraph from '@/components/charts/NetworkGraph';
import type { Charts } from '@/types/analysis/analysis';

const HEX = [
  '#8b5cf6',
  '#22d3ee',
  '#f59e0b',
  '#ef4444',
  '#10b981',
  '#3b82f6',
  '#a78bfa',
  '#f472b6',
];
const withA = (hex: string, a = 0.35) =>
  `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(
    hex.slice(3, 5),
    16
  )},${parseInt(hex.slice(5, 7), 16)},${a})`;

const commonOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top', labels: { boxWidth: 12 } },
    tooltip: {
      backgroundColor: '#0f1117',
      borderColor: '#312e81',
      borderWidth: 1,
      titleColor: '#fff',
      bodyColor: '#e5e7eb',
    },
  },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,.06)' } },
    y: { grid: { color: 'rgba(255,255,255,.06)' }, beginAtZero: true },
  },
} as const;

function buildPieData(charts?: Charts) {
  const series = charts?.sentimentDonut?.series?.[0];
  if (!series?.data?.length) {
    return {
      labels: ['긍정', '중립', '부정'],
      datasets: [
        {
          data: [45, 35, 20],
          backgroundColor: [
            withA(HEX[0], 0.85),
            withA(HEX[1], 0.85),
            withA(HEX[2], 0.85),
          ],
          borderColor: [HEX[0], HEX[1], HEX[2]],
          borderWidth: 2,
          hoverOffset: 8,
          offset: 4,
        },
      ],
    };
  }

  const labels = series.data.map(d => d.name ?? '');
  const values = series.data.map(d => (typeof d.y === 'number' ? d.y : 0));
  const backgroundColor = values.map((_, i) =>
    withA(HEX[i % HEX.length], 0.85)
  );
  const borderColor = values.map((_, i) => HEX[i % HEX.length]);

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor,
        borderColor,
        borderWidth: 2,
        hoverOffset: 8,
        offset: 4,
      },
    ],
  };
}

function buildBarData(charts?: Charts) {
  const series = charts?.keywordTreemap?.series?.[0];
  if (!series?.data?.length) {
    const labels = ['이재명', '대통령', '검증', '사실', '보도'];
    return {
      labels,
      datasets: [
        {
          label: '빈도',
          data: [30, 22, 18, 17, 9],
          backgroundColor: HEX.slice(0, labels.length).map(h => withA(h, 0.7)),
          borderColor: HEX.slice(0, labels.length),
          borderWidth: 1.5,
          borderRadius: 8,
          barPercentage: 0.65,
          categoryPercentage: 0.6,
        },
      ],
    };
  }

  const labels = series.data.map(d => d.name ?? '');
  const values = series.data.map(d =>
    typeof d.value === 'number' ? d.value : 0
  );

  return {
    labels,
    datasets: [
      {
        label: '빈도',
        data: values,
        backgroundColor: values.map((_, i) => withA(HEX[i % HEX.length], 0.7)),
        borderColor: values.map((_, i) => HEX[i % HEX.length]),
        borderWidth: 1.5,
        borderRadius: 8,
        barPercentage: 0.65,
        categoryPercentage: 0.6,
      },
    ],
  };
}

type GraphNode = { id: number; label: string; value: number; color: string };
type GraphEdge = { from: number; to: number; value: number };

type BackendNode = {
  id: string;
  label?: string;
  weight?: number;
  category?: string;
};

type BackendEdgeSourceTarget = {
  source: string;
  target: string;
  weight?: number;
};
type BackendEdgeFromTo = { from: string; to: string; value?: number };
type BackendEdge = BackendEdgeSourceTarget | BackendEdgeFromTo;

function hasSourceTarget(e: BackendEdge): e is BackendEdgeSourceTarget {
  return 'source' in e && 'target' in e;
}
function hasFromTo(e: BackendEdge): e is BackendEdgeFromTo {
  return 'from' in e && 'to' in e;
}

function buildNetworkData(charts?: Charts): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const net = charts?.networkChart as
    | { nodes?: BackendNode[]; edges?: BackendEdge[] }
    | undefined;

  if (!net?.nodes?.length) {
    const nodes: GraphNode[] = [
      { id: 1, label: '정부', value: 80, color: HEX[0] },
      { id: 2, label: '경제정책', value: 60, color: HEX[1] },
    ];
    const edges: GraphEdge[] = [{ from: 1, to: 2, value: 5 }];
    return { nodes, edges };
  }

  const idMap = new Map<string, number>();
  const nodes: GraphNode[] = net.nodes!.map((n, idx) => {
    const numericId = idx + 1;
    idMap.set(n.id, numericId);
    return {
      id: numericId,
      label: n.label ?? n.id,
      value: Math.max(1, Math.round((n.weight ?? 1) * 100)),
      color: HEX[idx % HEX.length],
    };
  });

  const edges: GraphEdge[] = (net.edges ?? [])
    .map((e): GraphEdge | null => {
      let src: string;
      let trg: string;
      let w: number | undefined;

      if (hasSourceTarget(e)) {
        src = e.source;
        trg = e.target;
        w = e.weight;
      } else if (hasFromTo(e)) {
        src = e.from;
        trg = e.to;
        w = e.value;
      } else {
        return null;
      }

      const from = idMap.get(src) ?? 0;
      const to = idMap.get(trg) ?? 0;
      if (!from || !to) return null;

      const raw = typeof w === 'number' ? w : 1;
      const value =
        raw <= 1 ? Math.max(1, Math.round(raw * 10)) : Math.round(raw);

      return { from, to, value };
    })
    .filter((x): x is GraphEdge => x !== null);

  return { nodes, edges };
}

type Props = {
  charts?: Charts;
};

export default function ResultsCharts({ charts }: Props) {
  const pieData = buildPieData(charts);
  const barData = buildBarData(charts);
  const { nodes, edges } = buildNetworkData(charts);

  return (
    <>
      <li className="results_list03">
        <span className="results_list_tit">해당 기사의 분위기에요</span>
        <div className="chart_box chart_box03">
          <PieChart data={pieData} />
        </div>
      </li>

      <li className="results_list04">
        <span className="results_list_tit">키워드들간의 관계</span>
        <div className="chart_box chart_box04">
          <NetworkGraph nodes={nodes} edges={edges} height={260} />
        </div>
      </li>

      <li className="results_list05">
        <span className="results_list_tit">이 키워드들이 많이 나왔어요</span>
        <div className="chart_box chart_box05">
          <BarChart data={barData} options={commonOpts} />
        </div>
      </li>
    </>
  );
}
