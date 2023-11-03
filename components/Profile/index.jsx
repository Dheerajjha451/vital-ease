'use client'
import { GlobalContext } from '@/context';
import { Icon } from '@iconify/react';
import React, { useContext, useEffect, useState } from 'react';

function index(props) {
    const{user}=useContext(GlobalContext)
    console.log(user)
    const[usercol,setusercol]=useState('')
    
    useEffect(() => {
        if (user.rolee === 'user') {
        // Set the color to 'pink' if the user's role is 'guardian'
        setuserCol('text-red-200');
        }else if(user.rolee=='guardian'){
            setusercol('text-DG')
        } else {
        // Set the color to another value if needed
        setuserCol('text-DB');
        }
    }, [user.rolee]);
    
    return (
        <div className='fixed top-5 right-10 flex gap-4'>
            <div className='font-semibold text-xl'>
                <h1>@{user.name}</h1>
                <h2 className={`${usercol}`}>{user.rolee}</h2>
            </div>
            <Icon icon="solar:user-bold" className={`text-6xl ${usercol}`}/>
        </div>
    );
}

export default index;