import React, { useContext } from 'react' 
import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home' 
import About from './Pages/About' 
import { Pages } from './store/Pages'
import Projects from './Pages/Projects'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import {  HelmetProvider } from 'react-helmet-async';

function App() {

  const {open} = useContext(Pages)
  
  return (
    <HelmetProvider>
    <div className="w-[100%]" style={{fontFamily: ['Poppins', 'sans']}}>
      <BrowserRouter>  
      <Navbar/>
       {open ? null : (
        <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="about" element={<About/>}/> 
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
       )}
       <ToastContainer/>
      </BrowserRouter> 
    </div> 
    </HelmetProvider>
  )
}

export default App