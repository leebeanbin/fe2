'use client';
import { useEffect, useRef } from 'react';
import Chart from './chart-setup';
import type { Chart as ChartType, ChartData, ChartOptions } from 'chart.js';

type PieData = ChartData<'pie', number[], string>;
type PieOpts = ChartOptions<'pie'>;

export default function PieChart({
  data,
  options,
}: {
  data: PieData;
  options?: PieOpts;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<ChartType<'pie', number[], string> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: 'pie',
      data,
      options,
    });

    return () => chartRef.current?.destroy();
  }, [data, options]);

  return <canvas ref={canvasRef} />;
}
