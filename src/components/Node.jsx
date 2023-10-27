import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default function Node({node,nodeClick}) {

    const [showSubnodes,setShowSubnodes] = useState(false)

    const handleGetNewTimelineByNode = (id) =>{

        nodeClick(`/timeline/timelineNodes/${id}`)
      }

      const handleGetNewTimelineBySubNode = (id,subId) =>{

        nodeClick(`/timeline/timelineNodes/${id}/subnodes/${subId}`)
      }


  return (
    <div onMouseEnter={()=>{setShowSubnodes(true)}} onMouseLeave={()=>{setShowSubnodes(false)}} className='node-element is-relative'><FontAwesomeIcon onClick={()=>{handleGetNewTimelineByNode(node.id)}}  icon={faCircle} />
        <div className='is-absolute subnode-container is-flex is-flex-direction-column'>
            {showSubnodes && node.subnodes.map(subnode=> <div className='subnode-element'><FontAwesomeIcon onClick={()=>{handleGetNewTimelineBySubNode(node.id,subnode.id)}}  icon={faCircle} /></div> )}
        </div>
    </div>
  )
}
