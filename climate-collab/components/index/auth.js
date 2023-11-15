"use client"; 

import { useSession } from "next-auth/react";

import Link from "next/link";
import React from 'react';

const Auth = ( ) => {
    const session = useSession(); 
    console.log('here'); 
    //const auth = session.data.authenticated;
    
    return(
        <div className={``}>
            <div>
                <Link href={session.data ? `/main` : `/api/auth/signin`}>
                    <button className="bg-gradient-to-tl from-slate-50 to-blue-200 p-5 text-lg rounded-3xl shadow-xl hover:from-slate-800 hover:to-blue-950 hover:text-slate-50 hover:font-bold">Click here to {session.data ? "access": "authenticate"}</button>
                </Link>
            </div>
        </div>
    ); 
}


export default Auth; 