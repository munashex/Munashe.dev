import React from 'react' 
import munashe from '../images/Munashe.png' 
import {HiBars2} from 'react-icons/hi2'

function Navbar() {
  return (
    <div> 

      {/* navbar on small screens   */} 
      <div className="flex items-center gap-x-4 mx-6 md:hidden">
      <span>
        <HiBars2 size={49}/>
      </span> 

       <img src={munashe} className="w-1/2"/>
      </div> 

    </div>
  )
}

export default Navbar