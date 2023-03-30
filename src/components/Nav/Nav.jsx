import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <>
      <div className='nav-container'>
        <h1 className='heading'>Knowledge Cafe</h1>
        <div className='nav-items'>
          <a href='./blog'>Blog</a>
          <a href='./about'>About</a>
          <a href='./login'>Login</a>
        </div>
        <div>
          <img src='' alt='profile-image' />
        </div>
      </div>
      <hr className='hr-line' />
    </>
  )
}

export default Nav
