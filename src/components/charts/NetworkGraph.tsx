'use client';
import { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

type NodeInput = {
  id: string | number;
  label: string;
  value?: number;
  color?: string;
};
type EdgeInput = {
  from: string | number;
  to: string | number;
  value?: number;
  color?: string;
};

export default function NetworkGraph({
  nodes,
  edges,
  height = 280,
}: {
  nodes: NodeInput[];
  edges: EdgeInput[];
  height?: number;
}) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<Network | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    netRef.current?.destroy();
    netRef.current = new Network(
      elRef.current,
      { nodes, edges },
      {
        layout: { improvedLayout: true },
        physics: { solver: 'forceAtlas2Based', stabilization: true },
        interaction: { hover: true },
        nodes: {
          shape: 'dot',
          scaling: { min: 6, max: 36 },
          font: { color: '#e5e7eb', size: 12 },
          color: {
            background: '#1f2937',
            border: '#6366f1',
            highlight: { background: '#312e81', border: '#a78bfa' },
          },
        },
        edges: {
          color: {
            color: 'rgba(99,102,241,.55)',
            highlight: 'rgba(167,139,250,.9)',
          },
          width: 2,
          smooth: {
            enabled: true,
            type: 'continuous',
            roundness: 0.5,
          },
        },
      }
    );

    return () => netRef.current?.destroy();
  }, [nodes, edges]);

  return <div ref={elRef} style={{ height, width: '100%' }} />;
}
