import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
   <div className="bg-gray-700 p-2 text-white mt-8 flex-col space-y-4">
   <h1 class="text-sm md:text-lg font-bold text-center">Copyright © 2023. All rights are reserved</h1>
    
   <div className="flex justify-center gap-x-5">
            <a href="https://github.com/munashex" className="hover:text-blue-600"><BsGithub size={30} /></a>
            <a href="https://instagram.com/munashedev" className="hover:text-blue-600"><FiInstagram size={30} /></a>
          </div>
   </div>
  )
}

export default Footer