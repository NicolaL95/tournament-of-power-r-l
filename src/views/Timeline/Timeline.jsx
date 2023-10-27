import React from 'react'
import useDatabase from '../../hooks/useDatabase'
import TimeLineNodes from '../../components/TimeLineNodes';
import "./Timeline.css"
export default function Timeline() {

  const [currenTimeline,setCurrentTimeline] = useDatabase();
  return (
    <div className='is-flex is-flex-direction-column is-align-items-center'>
      <p>{currenTimeline.description}</p>
      <TimeLineNodes customClass={"nodes-container"} nodes={currenTimeline.timelineNodes}/>
    </div>
  )
}