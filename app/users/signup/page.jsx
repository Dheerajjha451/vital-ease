'use client';
import InputComponent from '@/components/Navbar/FormElements/InputComponent';
import SelectComponent from '@/components/Navbar/FormElements/SelectedComponent';
import { registerNewUser } from '@/services/signup';
import { registrationFormControls } from '@/utils';
import Link from 'next/link';
import loginpic from "@/public/assests/login.webp"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const isRegistered = false;



const initialFormData = {
    name: '',
    email: '',
    password: '',
}

const Signup = () => {
    const router = useRouter();

    const [formData, setFormData] = useState(initialFormData)

    function isFormValid() {
        return formData && formData.name && formData.name.trim() !== ''
            && formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }
    async function handleRegisterOnSubmit() {

        const data = await registerNewUser(formData);
        router.push('/users/signup')

        console.log(data)
    }


    return (
        <div className="max-h-screen h-screen bg-LG bg-pattern bg-contain bg-center flex flex-col justify-center items-center">
            <div className='grid grid-cols-2  bg-white rounded-2xl place-items-center'>
                <div className="p-12">
                    <h6 className="text-2xl text-center font-bold">
                        {isRegistered ? "Registration Successful!" : "Signup for an Account"}

                    </h6>
                    <div className="flex justify-center">
                        <div className="w-96 py-8">

                            {isRegistered ? (<Link href="/users/login"><button
                                className="w-full bg-green-500 text-white p-2 rounded"
                            >
                                Login
                            </button></Link>
                            ) :
                                (<div className='w-full relative space-y-6'>
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
                                        className="disabled:opacity-50 w-full bg-DB text-white py-3 px-2 rounded-lg"
                                        disabled={!isFormValid()}
                                        onClick={handleRegisterOnSubmit}
                                    >
                                        SignUp
                                    </button>
                                    <div className='flex flex-col gap-2'>
                                    <p>Already have an Account?</p>
                                    <button
                                        className="w-full bg-DB text-white py-3 px-2 rounded-lg"
                                        onClick={() => router.push('/users/login')}
                                    >
                                        Login
                                    </button>
                                </div>
                                </div>
                                )
                            }
                        </div>
                        
                    </div>

                </div>
                <img src={loginpic.src} className='absolute lg:w-7/12 lg:-mr-[40vw] lg:-mb-24 xl:-mr-[26vw] xl:-mb-10 xl:w-4/12' alt='login pic'/>

            </div>


        </div>
    );
};

export default Signup;
