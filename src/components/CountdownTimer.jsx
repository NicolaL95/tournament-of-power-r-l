import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import UseCountdown from './UseCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="container is-flex p-6">
        <DateTimeDisplay value={days} type={'Days'} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

export default function CountdownTimer ({ targetDate }) {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};