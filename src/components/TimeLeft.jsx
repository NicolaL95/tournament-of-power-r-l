import { useEffect, useState } from 'react';

export default function TimeLeft (targetDate) {
  const endingDate = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(
    endingDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(endingDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [endingDate]);

  return convertFromMilliseconds(timeLeft);
};

const convertFromMilliseconds = (timeLeft) => {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};