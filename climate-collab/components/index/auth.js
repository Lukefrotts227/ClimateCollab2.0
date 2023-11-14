import Link from "next/link";
import React from 'react';
import { getServerSession } from "next-auth";

const Auth = ( ) => {
    const session = false; 
    console.log('here'); 
    console.log(getServerSession())
    
    return(
        <div className={``}>
            <div>
                <Link href={session ? `/main` : `/api/auth/signin`}>
                    <button className="bg-gradient-to-tl from-slate-50 to-blue-200 p-5 text-lg rounded-3xl shadow-xl hover:from-slate-800 hover:to-blue-950 hover:text-slate-50 hover:font-bold">Click here to {session ? "access": "authenticate"}</button>
                </Link>
            </div>
        </div>
    ); 
}


export default Auth; 