import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import Sidebar from './Component/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
     <Sidebar/>
     <Navbar/>
     <Main/>
    </div>
  )
}

export default App
