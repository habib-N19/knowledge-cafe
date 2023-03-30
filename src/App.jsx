import { useState } from 'react'

import './App.css'
import BlogMain from './components/BlogMain/BlogMain'
import Nav from './components/Nav/Nav'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav></Nav>
      <BlogMain></BlogMain>
    </div>
  )
}

export default App
