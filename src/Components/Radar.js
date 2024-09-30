import React from 'react'
import radar from '../Images/radar.png'
import '../Style/radar.css'

const Radar = () => {
  return (
    <div className='radar-content'> 
        <img src={radar} alt="radar"/>
        <span></span>
    </div>
  )
}

export default Radar