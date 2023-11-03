'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollingUp(scrollTop < (window.dataScroll || 0));
      window.dataScroll = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUserProfileClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className={`fixed top-0 z-10 flex items-center justify-between py-4 px-8 w-screen transition-all duration-300 ${scrollingUp ? 'bg-LG' : 'bg-white shadow-md'}`}>
      <div className='flex items-center'>
        <Link href="/"><h1 className='font-semibold text-xl'>Vital-Ease</h1></Link>
      </div>

      <div className='grid grid-cols-3 place-items-center'>
        <Link href='/' className='text-gray-800 hover:text-blue-500'>
          Home
        </Link>
        <Link href='/components/About' className='text-gray-800 hover:text-blue-500'>
           About
        </Link>


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
