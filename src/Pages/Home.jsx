import React from 'react';
import munashe from '../images/muna.png';
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { Logos } from '../data/Logo';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
function Home() { 
  return (
   <div>
  
  <Helmet>
    <title>munashe.dev</title>
  </Helmet>


     <div className="mb-9">
      <div className="gap-x-20 lg:py-2 lg:gap-x-28 mx-6 flex flex-col gap-y-11 items-center justify-center my-12 md:flex-row-reverse">

        <img src={munashe} alt="munashe"
          className="w-64 lg:w-80 bg-gray-200 border-2 to-white-400 rounded-full border-black animate-fade-left"
        />

        <div className="flex flex-col w-[90%] md:w-[50%] lg:w-[40%] animate-fade-right  gap-y-5">
          <h1 className="text-4xl lg:text-5xl font-medium text-center">React Full Stack Developer</h1>
          <h1 className="text-lg text-slate-700 text-center">Greetings, I'm Munashe Mugonda, a fervent React Full Stack Programmer hailing from Africa.</h1>

          <div className="flex justify-center gap-x-5">
            <a href="https://github.com/munashex" className="hover:text-blue-600"><BsGithub size={30} /></a>
            <a href="https://instagram.com/munashedev" className="hover:text-blue-600"><FiInstagram size={30} /></a>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center gap-y-3 animate-fade-up">
        <h1 className="text-center text-xl font-bold">Tech Stack</h1>
        <div className="grid grid-cols-4 md:grid-cols-6 justify-items-center gap-3">
          {Logos.map((item) => (
            <div key={item.name}>
              <img src={item.image} alt={item.name} /> 
            </div>
          ))}
          <h1 className="lg:py-5"></h1>
        </div>
      </div>
    </div>

    <Footer/>
   </div>
  );
}

export default Home;
