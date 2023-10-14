import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; 
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); 

  

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading state

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, 
        form.current, import.meta.env.VITE_PUBLIC_ID)
      .then(
        (result) => {
          toast.success('Your message was conveyed perfectly');
          e.target.reset();
        },
        (error) => {
          console.log(error)
          toast.error(error.message);
        }
      )
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>

    <div className="flex animate-fade-up mt-9 mb-20 flex-col items-center p-8 bg-gray-100">
      <h1 className="text-2xl lg:text-3xl text-center text-black font-bold mb-4">Get In Touch</h1>

      <p className="text-lg text-center text-slate-700 mb-6">
        Open to career inquiries, I'm here to respond promptly and comprehensively.
      </p>

      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
        <div className="mb-4">
          <input
            required
            type="text"
            name="user_name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            required
            type="email"
            name="user_email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <textarea
            required
            name="message"
            className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:border-blue-500"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2 animate-pulse">Loading...</div>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div> 
    <Footer/> 
    </div>
  ); 
}

export default Contact;
