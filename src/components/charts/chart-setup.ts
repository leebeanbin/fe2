import Chart from 'chart.js/auto';
import { Colors } from 'chart.js';

Chart.register(Colors);
Chart.defaults.color = '#e5e7eb';
Chart.defaults.borderColor = 'rgba(255,255,255,.12)';

export default Chart;
