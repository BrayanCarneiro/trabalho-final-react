import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
    </div>
  )
}

export default App
