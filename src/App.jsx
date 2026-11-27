import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { EventCard } from './component/EventCard'
import Navbar from './component/Navbar'
import { Sidebar } from './component/Sidebar'
import { StatusCard } from './component/StatusCard'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
        <Navbar/>
        <div className="flex">
          <EventCard/>
          <Sidebar/>
          <StatusCard/>
          <Login/>
          <Dashboard/>
        </div>
        
        

    </div>
    
  )
}

export default App
