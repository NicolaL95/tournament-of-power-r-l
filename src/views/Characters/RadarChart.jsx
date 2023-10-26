import * as echarts from 'echarts';
import { useEffect } from 'react';
import RadarChartValues from './RadarChartOptions';

export default function RadarChart({characterSpecs2k21, characterSpecs2k24}) {

  useEffect(() => {
    const chartDomLoocation = document.getElementById('radarChart');
    const radarChart = echarts.init(chartDomLoocation);
    const options = RadarChartValues(characterSpecs2k21,characterSpecs2k24);

    return (radarChart.setOption(options));
  });
}