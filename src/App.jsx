import React from 'react' 
import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-[100%]">
      <BrowserRouter>  
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App