import { useState } from 'react'

import './App.css'
import BlogMain from './components/BlogMain/BlogMain'
import Nav from './components/Nav/Nav'

function App () {
  const [count, setCount] = useState(0)
  const handleReadTime = time => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    if (previousReadTime) {
      const sum = previousReadTime + time
      localStorage.setItem('readTime', sum)
    } else {
      localStorage.setItem('readTime', time)
    }
  }

  return (
    <div className='App'>
      <Nav></Nav>
      <BlogMain handleReadTime={handleReadTime}></BlogMain>
    </div>
  )
}

export default App
