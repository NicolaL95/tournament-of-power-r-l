import React from 'react';
import DisplayValues from './DisplayValues';
import TimeLeft from './TimeLeft';

const ExpiredCountdown = () => {
  return (
    <div className="container">
      <p className='has-text-justified p-6>'>TOP INCOMING</p>
    </div>
  );
};

const ShowCountdown = (props) => {
  return (
    <div className="container is-flex p-6">
     {Object.keys(props).map(key => <DisplayValues value={props[key]} type={key}/>)}
    </div>
  );
};

export default function Countdown ({ targetDate }) {
  const [days, hours, minutes, seconds] = TimeLeft(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredCountdown />;
  } 
  else {
    return (
      <ShowCountdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};