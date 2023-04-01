import React, { useEffect, useState } from 'react'
import './BlogMain.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Blog from '../Blog/Blog'
import SideCard from '../SideCard/SideCard'
const BlogMain = ({ handleReadTime, readTime }) => {
  const [userData, setUserData] = useState([])
  const [bookmark, setBookmark] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])
  // toggle bookmark
  const toggleBookmark = bookmarks => {
    const exit = bookmark.find(bk => bk === bookmarks.blog_title)
    if (exit) {
      toast.error('already added')
    } else {
      const newBookmark = [...bookmark, bookmarks.blog_title]
      toast.success('added')
      setBookmark(newBookmark)
    }
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
        bookmark={bookmark}
      ></SideCard>
    </div>
  )
}

export default BlogMain
