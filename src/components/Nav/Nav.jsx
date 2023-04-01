import React from 'react'
import './Nav.css'

const Nav = props => {
  return (
    <div div className='nav-hr-container'>
      <div className='nav-container'>
        <h1 className='heading'>Knowledge Cafe</h1>
        <div className='nav-items'>
          <a className='nav-item' href='./blog'>
            Blog
          </a>
          <a className='nav-item' href='./about'>
            About
          </a>
          <a className='nav-item' href='./login'>
            Login
          </a>
        </div>
        <div className='nav-img-container'>
          <img
            src='https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=996&t=st=1680206403~exp=1680207003~hmac=359943389d26ef37c7fdf945913dab241392cc4072fd5925d27fdde306b6ef76'
            alt='profile-image'
          />
        </div>
      </div>
      <hr className='hr-line' />
    </div>
  )
}

export default Nav
