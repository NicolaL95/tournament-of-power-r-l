import React, { useEffect } from 'react'
import useDatabase from '../../hooks/useDatabase';
import TimeLineNodes from '../../components/TimeLineNodes';
import "./Timeline.css"

export default function Timeline() {
  const [timeline] = useDatabase();
  const [currentTimeline,setCurrentTimeline] = useDatabase();

  return (
    <div className='is-flex is-flex-direction-column is-align-items-center is-relative is-h-100'>
      <p>{currentTimeline?.description}</p>
      <TimeLineNodes click={setCurrentTimeline} customClass={"nodes-container is-absolute"} nodes={timeline.timelineNodes}/>
    </div>
  );
}