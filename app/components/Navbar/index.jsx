'use client';
import React, { useState } from 'react';

function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserProfileClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className='flex items-center justify-between py-4 px-8 w-screen bg-white shadow-lg'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-xl'>Vital-Ease</h1>
      </div>

      <div className='flex items-center space-x-6'>
        <a href='#' className='text-gray-800 hover:text-blue-500'>
          Home
        </a>
        <a href='#' className='text-gray-800 hover:text-blue-500'>
          About
        </a>
        <a href='#' className='text-gray-800 hover:text-blue-500'>
          Chatbot
        </a>
       
        <div className='flex items-center space-x-4'>
          {isLoggedIn ? (
            <a href='#' onClick={handleUserProfileClick} className='text-gray-800 hover:text-blue-500'>
              User Profile
            </a>
          ) : (
            <a href='#' onClick={handleUserProfileClick} className='text-gray-800 hover:text-blue-500'>
              Login
            </a>
          )}
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
