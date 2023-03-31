import React, { useEffect, useState } from 'react'
import './SideCard.css'
const SideCard = ({ readTime }) => {
  const [time, setTime] = useState(readTime)
  useEffect(() => {
    const getReadTimeFromLocalStorage = localStorage.getItem('readTime')
    if (getReadTimeFromLocalStorage === null) {
      setTime(0)
    } else {
      setTime(getReadTimeFromLocalStorage)
    }
  }, [readTime])
  return (
    <div className='side-card-container'>
      <div className='read-time-container'>
        <p>Spend time reading: {time} min</p>
      </div>
    </div>
  )
}

export default SideCard
