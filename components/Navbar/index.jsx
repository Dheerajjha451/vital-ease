'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserProfileClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav  className='fixed px-72 top-0 z-10 flex items-center justify-between py-4 px-8 w-screen bg-LG '>
      <div className='flex items-center'>
        <Link href="/"><h1 className='font-semibold text-xl'>Vital-Ease</h1></Link>
      </div>

      <div className='grid grid-cols-3 place-items-center'>
        <Link href='/' className='text-gray-800 hover:text-blue-500'>
          Home
        </Link>
        <a href='#' className='text-gray-800 hover:text-blue-500'>
          About
        </a>
        {/* <Link href='/users/chatbot' className='text-gray-800 hover:text-blue-500'>
          Chatbot
        </Link> */}
       
        <div className='flex items-center space-x-4'>
          {isLoggedIn ? (
            <a href='#' onClick={handleUserProfileClick} className='text-gray-800 hover:text-blue-500'>
              User Profile
            </a>
          ) : (
            <div className="flex items-center space-x-4">
            <Link href='/users/login' className='text-gray-800 hover:text-blue-500'>
              Login
            </Link>
            <Link href='/users/signup' className='text-gray-800 hover:text-blue-500'>
              SignUp
            </Link>
            </div>
          )}
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
