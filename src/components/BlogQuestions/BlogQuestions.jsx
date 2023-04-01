import React from 'react'
import './BlogQuestions.css'
const BlogQuestions = () => {
  return (
    <div className='blog-questions'>
      <div>
        <h4>Props vs State</h4>
        <p>
          1. Props are immutable but we can modify states with state functions{' '}
        </p>
        <p>2. Props are read only but states aren't</p>
        <p>
          Props are used as a data passing parameter property from one component
          to another but states can be used inside that component
        </p>
      </div>
      {/* ques 2 */}
      <div>
        <h4>How does useState works?</h4>
        <p>
          UseState is a react hook that takes two value in an array, one is a
          value and another is function to modify that value. Besides, it takes
          a primary value as if nothing is passed then that value will be the
          primary value of that state.
          <code>const [count, setCount] = useState([])</code>
          <p>
            Here we can see count is the value and we can modify that value with
            setCount function, if no value is passed onto that state then on the
            right side assigned empty array will be used as the value of that
            function.
          </p>
        </p>
      </div>
      {/* ques 3 */}
      <div>
        <h4>Purpose of useEffect other than fetching data</h4>
        <p>
          The key purpose of using useEffect is it rerenders the dom after each
          update on the site, it was provided by react developers . If we use
          useEffect to fetch data from api it will just do fine as a async await
          function does. But the key point is , using useEffect provides
          asynchronous options automatically
        </p>
      </div>
      {/* ques 4 */}
      <div>
        <h4>How does React works under the hood?</h4>
        <p>
          React uses component like objects that can be reused in the site. It
          also uses state management system for each component. For that
          particular reason we can change in one part of the website and show
          that change in different part of the site without changing or
          rewriting new codes for that. React also use virtual dom so it doesn't
          need to rerender every dom element after a state change. It can find
          the change in the dom and just rerender that component. It is
          comparatively faster than using vanilla js. React can be used for
          complex site state management. Basically react is a dom tree
          management library which can change and execute a particular
          component.
        </p>
      </div>
    </div>
  )
}

export default BlogQuestions
