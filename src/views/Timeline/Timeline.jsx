import React, { useEffect } from 'react'
import useDatabase from '../../hooks/useDatabase'
import TimeLineNodes from '../../components/TimeLineNodes';
import "./Timeline.css"
export default function Timeline() {

  const [timelineData,setTimelineData] = useDatabase();

  const [currentTimelineData,setCurrentTimelineData] = useDatabase();
 const {currentTimeline} = currentTimelineData
  const {timeline} = timelineData
  console.log(timeline,currentTimeline)
 useEffect(() => {
   console.log(
    currentTimeline
   )
  }, [currentTimeline])
  

  return (
    <div className='is-flex is-flex-direction-column is-align-items-center is-relative is-h-100'>
      <p>{currentTimeline?.description}</p>
      <TimeLineNodes click={setCurrentTimelineData} customClass={"nodes-container is-absolute"} nodes={timeline.timelineNodes}/>
    </div>
  )
}