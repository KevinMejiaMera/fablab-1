import { useState } from 'react'
import FablabLogo from './assets/FablabLogo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <a  target="_blank">
          <img src={FablabLogo} className="logo" />
        </a>
      </div>
      <h1>Site underconstruction</h1>
      <div className="card">
        <p>
        we are working
        </p>
      </div>
      
    </>
  )
}

export default App
