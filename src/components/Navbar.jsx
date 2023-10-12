 import munashe from '../images/Munashe.png' 
import {HiBars2} from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai' 
import { useContext } from 'react' 
import { Pages } from '../store/Pages' 
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

const {open, Toggle} = useContext(Pages) 
const location = useLocation()

const navLinks = [
  {url: "Home", path: '/'}, 
  {url: "About", path: "/about"},
   {url: "Projects", path: "/projects"}, 
   {url: "Contact", path: "/contact"}]

  return (
    <div className="shadow pb-1 md:shadow-none"> 

      {/* navbar on small screens   */} 
      <div className="flex items-center gap-x-4 mx-6 md:hidden">
      <button className="border-none" onClick={Toggle}>
        {open ? <AiOutlineClose size={40}/> : <HiBars2 size={40}/>}
      </button> 
        
        <Link to="/">
       <img src={munashe}
        className="w-52 animate-fade-right animate-duration-2000 animate-delay-300"
        />
        </Link>
        
      </div>  

      {/* navbar on md and lg screens  */}
      <div>

       <Link to="/" className="hidden md:flex  justify-center">
       <img src={munashe} alt="munashe"  
         className="md:w-64 w-72 animate-fade-right  animate-delay-300"
        />
       </Link>  

        <div className="hidden md:flex justify-center mt-4 text-xl gap-x-9">
       {navLinks.map((nav) => (
        <div> 
          <Link to={nav.path} className={`${location.pathname === nav.path ? 'border-b border-black' : 'font-light hover:font-medium'}`}>
            {nav.url} 
            </Link>
        </div>
       ))}
       </div>

      </div>


       {/* nav links for sm screens  */}
      <div className={`${open ? 'animate-fade-down  flex md:hidden flex-col font-light items-center my-9 gap-y-7 text-2xl' : 'hidden'}`}>
      {navLinks.map((nav) => (
        <div> 
          <Link to={nav.path}>
            {nav.url} 
            </Link>
        </div>
       ))}
       </div>
  
       

    </div>
  )
}

export default Navbar