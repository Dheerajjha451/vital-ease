'use client';
import InputComponent from '@/components/Navbar/FormElements/InputComponent';
import SelectComponent from '@/components/Navbar/FormElements/SelectedComponent';
import { GlobalContext } from '@/context';
import { login } from '@/services/login';
import { loginFormControls} from '@/utils';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { isValidElement, useContext, useEffect, useState } from 'react';


const initialFormData = {
    
    email: '',
    password: '',
    role: "Guardian"
}

const Login = () => {
    const [formData,setFormData]=useState(initialFormData);
    const {isAuthUser,setisAuthUser,user,setUser}=useContext(GlobalContext);
    const router=useRouter();
    // console.log(formData);
    function isValidForm() {
        return formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }

    async function handleLogin(){
        const res=await login(formData);
        // console.log(res)

        if(res.success){
            setisAuthUser(true);
            setUser(res?.finalData.user);
            // console.log(user)
            setFormData(initialFormData);
            Cookies.set('token',res?.finalData.token);
            localStorage.setItem('user',JSON.stringify(res?.finalData.user))
        }else{
            setIsAuthUser(false);
        }
        
    }
    useEffect(()=>{
        if(isAuthUser){
            if(user.rolee==="Elderly"){
                router.push('/dashboard/user')
                
            }else if(user.rolee==="Guardian"){
                router.push('/dashboard/Guardian')
            }else{
                
                router.push('/dashboard/CareGiver')
            }
        }
    },[isAuthUser]);

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
                                        value={formData[controlItem.id]}
                                        onChange={(event)=>{
                                            setFormData({
                                                ...formData,
                                                [controlItem.id]:event.target.value
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
                                className="disable:opacity-50 w-full bg-green-500 text-white p-2 rounded"
                                disabled={!isValidForm()}
                                onClick={handleLogin}
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
