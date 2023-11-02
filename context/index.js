'use client'
import { createContext, useState } from "react";

export const GlobalContext=createContext(null);
const[isAuthUser,setisAuthUser]=useState(null);
const[User,setUser]=useState(null);


export default function GlobalState({children}){
    return(
        <GlobalContext.Provider value={{isAuthUser,setisAuthUser,User,setUser}}>{children}</GlobalContext.Provider>
    )
}