import React from 'react'
import './Blog.css'
const Blog = ({ user, handleReadTime, toggleBookmark }) => {
  return (
    <div className='blog-card-container'>
      <div className='banner-img'>
        <img src={user.blog_cover_image} alt='' />
      </div>
      <div className='author-details'>
        {/* profile author  */}
        <div className='author-name-img-container'>
          {/* profile and author */}
          <div className='blog-user-container'>
            {/* profile */}
            <img src={user.author_image} alt='img-profile' />
          </div>
          <div className='author-name-date-container'>
            {/* author & date */}
            <div>
              <h4 className='author-name'>{user.author_name}</h4>
            </div>
            <div>
              <p className='publish-date'>{user.publish_date}</p>
            </div>
          </div>
        </div>
        {/* side read time */}
        <div>
          <p className='publish-date'>{user.read_time} minutes</p>
        </div>
      </div>
      {/* title */}
      <div>
        <h2>{user.blog_title}</h2>
      </div>
      {/* mark as read */}
      <div>
        <button
          className='mark-read-btn'
          onClick={() => handleReadTime(user.read_time)}
        >
          Mark as Read
        </button>
      </div>
    </div>
  )
}

export default Blog
