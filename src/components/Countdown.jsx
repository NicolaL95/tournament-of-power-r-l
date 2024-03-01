import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "./Countdown.css";

export default function Countdown () {  
    return(
        <div className="container is-flex p-6 m-auto">
          <FlipClockCountdown className="flip-clock" to={new Date().getTime() + 24 * 3600 * 1000 + 5000}/>
        </div>
    );
  };