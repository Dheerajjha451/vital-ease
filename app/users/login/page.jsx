'use client';
import InputComponent from '@/components/Navbar/FormElements/InputComponent';
import SelectComponent from '@/components/Navbar/FormElements/SelectedComponent';
import { loginFormControls} from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const isRegistered = false;

const initialFormData = {
    
    email: '',
    password: '',
    role: 'guardian'
}

const Login = () => {
    const router=useRouter();
    return (
        <div className="max-h-screen h-screen flex flex-col justify-center items-center">
            <div className="mb-5">
                <h6 className="text-lg font-semibold">
                    Login to your Account
 
                </h6>
            </div>
            <div className="flex justify-center">
                <div className="w-96 p-8 border border-gray-300">

                    <div className='w-full relative space-y-8'>
                            {loginFormControls.map((controlItem) =>
                                controlItem.componentType === "input" ? (
                                    <InputComponent
                                        type={controlItem.type}
                                        placeholder={controlItem.placeholder}
                                        label={controlItem.label}
                                        
                                    />
                                ) : controlItem.componentType === "select" ? (
                                    <SelectComponent
                                        options={controlItem.options}
                                        label={controlItem.label}
                                        
                                    />
                                ) : null
                            )}
                            <button
                                className="w-full bg-green-500 text-white p-2 rounded"
                            >
                                Login
                            </button>
                            <div className='flex flex-col gap-2'>
                                <p>New to Vital-Ease?</p>
                                <button
                                className="w-full bg-green-500 text-white p-2 rounded"
                                    onClick={()=>router.push('/users/signup')}
                            >
                                SignUp
                            </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
