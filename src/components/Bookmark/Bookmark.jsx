import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'

const Bookmark = ({ toggleBookmark, user }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmarkClick = () => {
    toggleBookmark(user)
    setIsBookmarked(!isBookmarked)
  }
  return (
    <div>
      <div>
        <FontAwesomeIcon
          onClick={() => handleBookmarkClick()}
          icon={isBookmarked ? solidBookmark : regularBookmark}
        />
      </div>
    </div>
  )
}

export default Bookmark
