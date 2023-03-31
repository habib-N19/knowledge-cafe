import React, { useEffect, useState } from 'react'
import './BlogMain.css'
import Blog from '../Blog/Blog'
import SideCard from '../SideCard/SideCard'
const BlogMain = ({ handleReadTime, readTime }) => {
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
      {/* <div className='blog-side-container'></div> */}
      <SideCard readTime={readTime}></SideCard>
    </div>
  )
}

export default BlogMain
