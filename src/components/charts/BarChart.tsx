'use client';
import { useEffect, useRef } from 'react';
import Chart from './chart-setup';

export default function BarChart({
  data,
  options,
}: {
  data: any;
  options?: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data,
      options,
    });
    return () => chartRef.current?.destroy();
  }, [data, options]);

  return <canvas ref={canvasRef} />;
}
