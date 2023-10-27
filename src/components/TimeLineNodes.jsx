import React from 'react'
import Node from './Node'

export default function TimeLineNodes({nodes,customClass,click}) {
  return (
    <div className={`${customClass}`}>
{nodes?.map(element=> <Node node={element} nodeClick={click}/>)}
    </div>
    
  )
}
