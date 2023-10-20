import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default function Radar() {

const data = [
    {
      data: {
        retarded: 0.5,
        highness: 0.9,
        hunger: 1,
        harassment: 1,
      },
      meta: { color: 'red' }
    }
  ];

const captions = {
    // columns
    retarded: 'Retarded',
    highness: 'Highness',
    hunger: 'Hunger',
    harassment: 'Harassment'
  };

  return (<RadarChart captions={captions} data={data} size={550} />);
}