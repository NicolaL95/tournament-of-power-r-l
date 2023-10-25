import React from 'react'
import useDatabase from "../../hooks/useDatabase";
import Carousel from '../../components/Carousel';
import Countdown from '../../components/Countdown';

export default function Homepage() {

  const { description } = useDatabase();
  const { date } = useDatabase();
  const targetDate = new Date(date).getTime();

  return (
    <div className="container is-flex-direction-row is-flex-wrap-wrap p-6">
        <p className='has-text-justified p-6'>{ description }</p>
        <Carousel />
        <Countdown targetDate={targetDate}/>
    </div>
  )
}