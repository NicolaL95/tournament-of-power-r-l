import React from 'react'
import useDatabase from '../../hooks/useDatabase';
import Carousel from '../../components/Carousel';
import Countdown from '../../components/Countdown';

export default function Homepage() {

  const [homepageData]  = useDatabase();
  const homepage = homepageData

  return (
    <div className="container is-flex-direction-row is-flex-wrap-wrap p-6">
        <Countdown />
        <Carousel />
        <p className='has-text-justified p-6'>{ homepage?.description }</p> 
    </div>
  )
}