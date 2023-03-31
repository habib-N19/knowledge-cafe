import React, { useEffect, useState } from 'react'
import './BlogMain.css'
import Blog from '../Blog/Blog'
const BlogMain = ({ handleReadTime }) => {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])
  return (
    <div className='blog-container'>
      <div>
        {userData.map(user => (
          <Blog
            key={user.id}
            user={user}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
      <div className='blog-side-container'>Blog2</div>
    </div>
  )
}

export default BlogMain
