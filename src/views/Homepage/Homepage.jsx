import React, { useEffect } from 'react'
import useDatabase from '../../hooks/useDatabase';
import Carousel from '../../components/Carousel';
import Countdown from '../../components/Countdown';

export default function Homepage() {

  const [homepageData,setData]  = useDatabase();
  const homepage = homepageData
  const targetDate = new Date(homepage?.date).getTime();

 useEffect(() => {
  setData([{charactersElement:"tegus"}])
}, []) 
/* re-apply the code to test how you can add more urlpath from useEffect */


  return (
    <div className="container is-flex-direction-row is-flex-wrap-wrap p-6">
        <p className='has-text-justified p-6'>{ homepage?.description }</p>
        <Carousel />
        <Countdown targetDate={targetDate}/>
    </div>
  )
}