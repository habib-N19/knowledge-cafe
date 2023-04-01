import React, { useEffect, useState } from 'react'
import './BlogMain.css'
import Blog from '../Blog/Blog'
import SideCard from '../SideCard/SideCard'
const BlogMain = ({
  handleReadTime,
  readTime

}) => {
  const [userData, setUserData] = useState([])
  const [bookmark, setBookmark] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])
  // toggle bookmark
  const toggleBookmark = bookmarks => {
    const newBookmark = [...bookmark, bookmarks.blog_title]
    setBookmark(newBookmark);
  }

  return (
    <div className='blog-container'>
      <div>
        {userData.map(user => (
          <Blog
            key={user.id}
            user={user}
            handleReadTime={handleReadTime}
            toggleBookmark={toggleBookmark}
          ></Blog>
        ))}
      </div>
      {/* <div className='blog-side-container'></div> */}
      <SideCard
        readTime={readTime}
        toggleBookmark={toggleBookmark}
        // setBookmark={setBookmark}
        bookmark={bookmark}
      ></SideCard>
    </div>
  )
}

export default BlogMain
