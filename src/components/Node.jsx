import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default function Node({node,nodeClick}) {
    const handleGetNewTimeline = (id) =>{

        nodeClick(`/timeline/timelineNodes/${id}`)
      }

  return (
    <div onClick={()=>{handleGetNewTimeline(node.id)}} className='node-element'><FontAwesomeIcon  icon={faCircle} /></div>
  )
}
