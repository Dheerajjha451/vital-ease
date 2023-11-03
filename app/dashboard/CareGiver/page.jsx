"use client"
import React, { useState } from 'react';

import { Diganos, Pres } from '@/components/Cards';
import ContactList from '@/components/ContactList';
import Card from '@/components/Cards/card';
import BloodStatus from '@/components/Cards/Bloodstatus';
function UsersPage(props) {
    const [selectedContact, setSelectedContact] = useState(null);

    const handleContactClick = (contact) => {
        // When a contact name is clicked, set it as the selected contact
        setSelectedContact(contact);
    };

    return (
        <div className='bg-LG bg-pattern bg-fixed'>
            {/* <DashNav/> */}
            <div className='flex '>
                <div className=''>
                    <ContactList onContactClick={handleContactClick} />
                </div>
                <div className=' ml-80 w-full'>
                    {selectedContact && (
                        <div className='py-12 px-24 divide-y-2 divide-dashed  divide-DDG'>
                            <div className='text-3xl p-4 font-bold'>
                                {/* <FaUserAlt/> */}
                                <h2>{selectedContact.name}</h2>
                                <h2>{selectedContact.age}</h2>
                            </div>

                            <div className='py-10'>
                                <h1 className='text-DDG text-2xl font-bold'>Latest Diagnosis</h1>
                                <div className='py-5 '>
                                    <BloodStatus/>

                                </div>
                            </div>
                            <div className='py-10'>

                                <h3 className='text-DDG text-2xl font-bold'>Medical Prescriptions:</h3>
                                <ul className='py-4'>
                                    {selectedContact.prescription.map((prescription) => (
                                        <Pres
                                            {...prescription}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className='py-10'>
                                <h3 className='text-DDG text-2xl font-bold'>Routine To-Do:</h3>
                                <ul>
                                    {selectedContact.routineTodo.map((todo, index) => (
                                        <Pres
                                            {...todo}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className='py-10'>
                                <h3 className='text-DDG text-2xl font-bold'>Additional Instruction:</h3>
                                <p>{selectedContact.additionalInstruction}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default UsersPage;