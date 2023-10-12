import React, { useContext } from 'react' 
import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home' 
import About from './Pages/About' 
import { Pages } from './store/Pages'
import Footer from './components/Footer'


function App() {

  const {open} = useContext(Pages)
  
  return (
    <div className="w-[100%] font-['Poppins, sans-serif']">
      <BrowserRouter>  
      <Navbar/>
       {open ? null : (
        <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="about" element={<About/>}/>
        </Routes>
       )}
      </BrowserRouter> 
    </div>
  )
}

export default App