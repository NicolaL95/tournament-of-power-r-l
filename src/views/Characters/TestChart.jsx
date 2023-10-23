import * as echarts from 'echarts';
import { useEffect } from 'react';

export default function TestChart() {

useEffect(() => {
const chartDom = document.getElementById('test');
const myChart = echarts.init(chartDom);
let option;

option = {
    title: {
      text: 'Specs'
    },
    legend: {
      data: ['In his mind', 'In reality']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Retarded', max: 6500 },
        { name: 'Highness', max: 16000 },
        { name: 'Hunger', max: 30000 },
        { name: 'Harassment', max: 38000 },
        { name: 'Skilled', max: 52000 },
        { name: 'Cringe', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Mind vs Reality',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'In his mind'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'In reality'
          }
        ]
      }
    ]
  };

return (option && myChart.setOption(option));

});
}