import React, { useEffect, useState } from 'react'
import './SideCard.css'
const SideCard = ({ readTime, bookmark }) => {
  const [time, setTime] = useState(readTime)

  useEffect(() => {
    const getReadTimeFromLocalStorage = localStorage.getItem('readTime')
    if (getReadTimeFromLocalStorage === null) {
      setTime(0)
    } else {
      setTime(getReadTimeFromLocalStorage)
    }
  }, [readTime])

  const eachBookmark = bookmark.map((singleBookmark, index) => (
    <div key={index} className='eachBookmark-container'>
      {singleBookmark}
    </div>
  ))
  return (
    <div>
      <div className='side-cards-container'>
        <div className='read-time-container'>
          <p>Spend time reading: {time} min</p>
        </div>
        <div className='bookmark-container'>
          <h4 className='bookmark-count'>
            Bookmarked Blogs: {bookmark.length}
          </h4>
          <div>{eachBookmark}</div>
        </div>
      </div>
    </div>
  )
}

export default SideCard
