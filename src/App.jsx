import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img  className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="" />

        <div className="menu">
          <a href=""> home</a>
          <a href=""> about</a>
          <a href=""> catalog</a>
        </div>
        
        <img className='burger' src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small_2x/hamburger-menu-line-icon-free-vector.jpg" alt="" />
      </header>
    </>
  )
}

export default App
