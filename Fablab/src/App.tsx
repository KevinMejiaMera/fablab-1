import { useState } from 'react'
import FablabLogo from './Img/FablabLogo.svg'
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
      <h1>construction site</h1>
      <div className="card">
        <p>
        we are working
        dfiSJFN#QWF
        </p>
      </div>
      
    </>
  )
}

export default App
