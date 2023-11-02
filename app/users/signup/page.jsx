'use client';
import InputComponent from '@/components/Navbar/FormElements/InputComponent';
import SelectComponent from '@/components/Navbar/FormElements/SelectedComponent';
import { registerNewUser } from '@/services/signup';
import { registrationFormControls } from '@/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const isRegistered = false;



const initialFormData = {
    name: '',
    email: '',
    password: '',
}

const Signup = () => {
    const [formData, setFormData] = useState(initialFormData)

    function isFormValid() {
        return formData && formData.name && formData.name.trim() !== ''
            && formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }
    async function handleRegisterOnSubmit(){

        const data=await registerNewUser(formData);
        router.push('/users/signup')

        console.log(data)
    }relative
    
    
    return (
        <div className="max-h-screen h-screen flex flex-col justify-center items-center">
            <div className="mb-5">
                <h6 className="text-lg font-semibold">
                    {isRegistered ? "Registration Successful!" : "Signup for an Account"}

                </h6>
            </div>
            <div className="flex justify-center">
                <div className="w-96 p-8 border border-gray-300">

                    {isRegistered ? (<Link href="/users/login"><button
                        className="w-full bg-green-500 text-white p-2 rounded"
                    >
                        Login
                    </button></Link>
                    ) :
                        (<div className='w-full relative space-y-8'>
                            {registrationFormControls.map((controlItem) =>
                                controlItem.componentType === "input" ? (
                                    <InputComponent
                                        type={controlItem.type}
                                        placeholder={controlItem.placeholder}
                                        label={controlItem.label}
                                        onChange={(event) => {
                                            setFormData({
                                                ...formData,
                                                [controlItem.id]: event.target.value,
                                            });
                                        }}
                                        value={formData[controlItem.id]}
                                    />
                                ) : null
                            )}
                            <button
                                className="disabled:opacity-50 w-full bg-green-500 text-white p-2 rounded"
                                disabled={!isFormValid()}
                                onClick={handleRegisterOnSubmit}
                            >
                                SignUp
                            </button>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Signup;
