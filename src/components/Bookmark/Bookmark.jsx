import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Bookmark = ({ toggleBookmark, user }) => {
  //   console.log('from bookmark', setBookmarked)
  //   const [isBookmarked, setIsBookmarked] = useState(false)
  //   const toggleBookmark = () => {
  //     setIsBookmarked(!isBookmarked)
  //   }
  return (
    <div>
      <div>
        <span className='bookmark-icon' onClick={() => toggleBookmark(user)}>
          <FontAwesomeIcon icon={faBookmark} />
        </span>
        {/* <FontAwesomeIcon
          icon={isBookmarked ? faBookmark : ['far', 'bookmark']}
          onClick={toggleBookmark}
        /> */}
      </div>
    </div>
  )
}

export default Bookmark
