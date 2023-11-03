
import React, { useState, useEffect, useRef } from 'react';
import SidebarD from '../DashNav/SidebarD/sidebar';
import { contactList } from '@/public/assests/list/patient_list';

// import contactList from './list.js';

const ContactList = ({ onContactClick }) => {
  const [activeLetter, setActiveLetter] = useState('A');
  const [letterCategories, setLetterCategories] = useState([]);
  const scrollRef = useRef(null);

  // Extract the unique first letters from the contact list
  useEffect(() => {
    const letters = [...new Set(contactList.map(contact => contact.name.charAt(0).toUpperCase()))];
    setLetterCategories(letters);
  }, []);
  
  const handleContactClick = (contact) => {
    // Call the parent function to send the selected contact
    onContactClick(contact);
  }

  // Scroll to a specific letter category
  const scrollToCategory = (letter) => {
    setActiveLetter(letter);
    const categoryElement = document.getElementById(`category-${letter}`);
    scrollRef.current.scrollTo({
      top: categoryElement.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed h-screen text-white bg-[#002864] w-1/6 overflow-y-hidden flex">
      <SidebarD/>
      <div
        className="ml-20 w-11/12 px-10 p-4 overflow-y-auto"
        ref={scrollRef}
      >
      <h1 className='text-4xl font-semibold'> Patients</h1>

        {letterCategories.map(letter => (
          <div key={letter} id={`category-${letter}`}>
            <div className="text-indigo-800 text-xl font-semibold my-2">{letter}</div>
            {contactList
              .filter(contact => contact.name.charAt(0).toUpperCase() === letter)
              .map(contact => (
                <div
                  key={contact.id}
                  className="my-2 cursor-pointer text-white"
                  onClick={() => handleContactClick(contact)}
                >
                  {contact.name}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 p-4">
        {letterCategories.map(letter => (
          <div
            key={letter}
            className={`cursor-pointer text-white ${activeLetter === letter ? 'text-indigo-800' : 'text-gray-600'}`}
            onClick={() => scrollToCategory(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
