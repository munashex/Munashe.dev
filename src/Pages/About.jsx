import React from 'react' 
import laptop from '../images/laptop.jpg'
import Footer from '../components/Footer'

function About() {
  return (
  <div>
      <div className="mb-16 mt-20"> 

<div className="flex flex-col gap-y-12 lg:flex-row justify-center gap-x-20">
  <div className="animate-fade-right animate-delay-300">
   <img src={laptop} alt="munashedev" 
   className="max-w-[90%] md:max-w-lg lg:max-w-lg mx-auto lg:mx-0 rounded-md"
   />
  </div> 

  <div className="max-w-[90%] md:max-w-lg lg:max-w-lg mx-auto animate-fade-left animate-delay-500 space-y-4 lg:mx-0">
    <h1 className="text-center text-lg font-bold text-blue-600">ABOUT ME</h1> 

    <h1 className="text-center text-xl font-bold">An Africa-based Full Stack Developer with a strong commitment to their work.</h1>
     <h1 className="text-center text-lg text-slate-700">

     As a Full Stack Developer, I bring a strong skill set
      encompassing HTML, CSS, JavaScript, React, Tailwind, SCSS, Express,
       Node.js, and MongoDB. I specialize in creating and managing 
       responsive websites that ensure seamless user interactions. 
       My proficiency extends to developing dynamic and captivating user
        interfaces, achieved through the creation of efficient,
         well-structured code and the incorporation of the latest
          development methodologies and tools. Collaboration is a 
     key strength of mine, and I excel when working with diverse
      teams to deliver exceptional web applications.
     </h1>
  </div> 

</div>  


</div>
<Footer/>
  </div>
  )
}

export default About