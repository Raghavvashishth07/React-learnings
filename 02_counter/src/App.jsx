import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Harayanvi seekh ra hai react</h1>
    <h2>samajh gya laadle</h2>
    <h3>count:5</h3>

    <button>Add value</button>
    <br />
    <button>remove value</button>

    </>
  )
}

export default App
