import * as echarts from 'echarts';
import { useEffect } from 'react';
import DB from '../db/db.json'

export default function RadarChart({characterSpecs2k21, characterSpecs2k24}) {

  const options = DB.radarChart
  options.series[0].data[0].value = characterSpecs2k21
  options.series[0].data[1].value = characterSpecs2k24

  useEffect(() => {
    const chartDomLoocation = document.getElementById('radarChart');
    const radarChart = echarts.init(chartDomLoocation);

    return (radarChart.setOption(options));
  });
}