import React from 'react'
import "./MobileLayout.css"

const MobileLayout = ({sidebar},{content}) => {
  return (
    <div className='mobile-layout'>
        {sidebar}
        {content}
    </div>
  )
}

export default MobileLayout