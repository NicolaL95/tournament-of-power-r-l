import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "./Countdown.css";

export default function Countdown ({targetDate}) {  
    return(
        <div className="container is-flex p-6 m-auto">
          {targetDate && <FlipClockCountdown className="flip-clock" to={targetDate}/>}
        </div>
    );
  };