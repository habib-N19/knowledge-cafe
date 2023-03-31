import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Bookmark = ({ toggleBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }
  return (
    <div>
      <div>
        <FontAwesomeIcon
          icon={isBookmarked ? faBookmark : ['far', 'bookmark']}
          onClick={toggleBookmark}
        />
      </div>
    </div>
  )
}

export default Bookmark
