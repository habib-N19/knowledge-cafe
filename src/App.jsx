import { useState } from 'react'

import './App.css'
import BlogMain from './components/BlogMain/BlogMain'
import Nav from './components/Nav/Nav'
import { ToastContainer } from 'react-toastify'

function App () {
  // const [count, setCount] = useState(0)
  const [readTime, setReadTime] = useState('')
  const handleReadTime = time => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    if (previousReadTime) {
      const sum = previousReadTime + time
      localStorage.setItem('readTime', sum)
      setReadTime(sum)
    } else {
      localStorage.setItem('readTime', time)
      setReadTime(time)
    }
  }

  return (
    <div className='App'>
      <Nav></Nav>
      <BlogMain handleReadTime={handleReadTime} readTime={readTime}></BlogMain>
      <ToastContainer />
    </div>
  )
}

export default App
