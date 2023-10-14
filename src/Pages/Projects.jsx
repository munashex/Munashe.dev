import React from 'react' 
import { Portfolio } from '../data/projects'
import {FaGithub} from 'react-icons/fa'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
 

const Projects = () => {
  
  return (
    <div> 
      <Helmet>
        <title>Projects</title>
      </Helmet>

    <div className="flex flex-col items-center my-9 gap-y-2">
     <h1 className="text-blue-600 font-bold text-lg md:text-xl">PORTFOLIO</h1> 
     <h1 className="text-xl md:text-2xl font-medium md:font-bold  text-center">
      Every project is like a one-of-a-kind puzzle piece in development. 🧩</h1>
    </div>  

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 my-12 md:my-16 justify-items-center">
      {Portfolio.map((project) => (
        <div key={project.name} className="max-w-[90%] animate-fade-left  border shadow-lg  space-y-2 md:max-w-sm lg:max-w-md   mx-auto md:mx-0"> 
          <img src={project.image} loading='lazy'/> 
          <h1 className="font-bold text-xl px-3">{project.name}</h1> 

          <div className="flex items-center gap-x-7  px-3 py-1">
            <a href={`${project.github}`} className="inline-flex items-center hover:text-blue-600 gap-x-2 text-black"> 
            Code <FaGithub size={24}/> 
            </a>
            <a  href={`${project.live}`} className="inline-flex items-center gap-x-2 hover:text-blue-600 text-black">
              Live demo<BsBoxArrowUpRight size={22}/> 
              </a>
           </div>

          <h1 className="text-lg text-slate-700 px-3">{project.description}</h1>
           <h1 className="py-2"></h1>
        </div>
      ))}
    </div>
  

  <Footer/>
    </div>
  )
} 
export default Projects