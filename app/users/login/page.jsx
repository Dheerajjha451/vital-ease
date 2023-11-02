'use client';
import InputComponent from '@/components/Navbar/FormElements/InputComponent';
import SelectComponent from '@/components/Navbar/FormElements/SelectedComponent';
import { GlobalContext } from '@/context';
import { login } from '@/services/login';
import { loginFormControls } from '@/utils';
import Cookies from 'js-cookie';
import loginpic from "@/public/assests/login.webp"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { isValidElement, useContext, useEffect, useState } from 'react';


const initialFormData = {

    email: '',
    password: '',
    role: "Guardian"
}

const Login = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { isAuthUser, setisAuthUser, user, setUser } = useContext(GlobalContext);
    const router = useRouter();
    // console.log(formData);
    function isValidForm() {
        return formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }

    async function handleLogin() {
        const res = await login(formData);
        // console.log(res)

        if (res.success) {
            setisAuthUser(true);
            setUser(res?.finalData.user);
            // console.log(user)
            setFormData(initialFormData);
            Cookies.set('token', res?.finalData.token);
            localStorage.setItem('user', JSON.stringify(res?.finalData.user))
        } else {
            setIsAuthUser(false);
        }

    }
    useEffect(() => {
        if (isAuthUser) {
            if (user.rolee === "Elderly") {
                router.push('/dashboard/user')

            } else if (user.rolee === "Guardian") {
                router.push('/dashboard/Guardian')
            } else {

                router.push('/dashboard/CareGiver')
            }
        }
    }, [isAuthUser]);

    return (
        <div className="max-h-screen h-screen flex flex-col justify-center items-center bg-pattern bg-contain bg-LG">
            <div className='grid grid-cols-2 rounded-2xl bg-white place-items-center'>
                <div className="p-12">
                    <h5 className="text-3xl text-center font-bold">Welcome Back!</h5>

                    <h6 className="text-lg text-DB text-center font-semibold">
                        Login to your Account
                    </h6>
                    <div className="flex justify-center bg-white">
                        <div className="w-96 py-8">

                            <div className='w-full relative space-y-8'>
                                {loginFormControls.map((controlItem) =>
                                    controlItem.componentType === "input" ? (
                                        <InputComponent
                                            type={controlItem.type}
                                            placeholder={controlItem.placeholder}
                                            label={controlItem.label}
                                            value={formData[controlItem.id]}
                                            onChange={(event) => {
                                                setFormData({
                                                    ...formData,
                                                    [controlItem.id]: event.target.value
                                                })
                                            }}

                                        />
                                    ) : controlItem.componentType === "select" ? (
                                        <SelectComponent
                                            options={controlItem.options}
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
                                    disabled={!isValidForm()}
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                <div className='flex flex-col gap-2'>
                                    <p>New to Vital-Ease?</p>
                                    <button
                                        className="w-full bg-DB text-white py-3 px-2 rounded-lg"
                                        onClick={() => router.push('/users/signup')}
                                    >
                                        SignUp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={loginpic.src} className='absolute lg:w-7/12 lg:-mr-[40vw] lg:-mb-24 xl:-mr-[26vw] xl:-mb-24 xl:w-4/12' alt='login pic'/>
            </div>


        </div>
    );
};

export default Login;
