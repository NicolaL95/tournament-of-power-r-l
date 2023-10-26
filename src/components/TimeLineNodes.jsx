import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default function TimeLineNodes({nodes,customClass}) {
  return (
    <div className={customClass}>
{nodes?.map(element=> <div className='node-element'><FontAwesomeIcon  icon={faCircle} /></div>)}
    </div>
    
  )
}
