import Link from "next/link";
import React from 'react';

const Auth = () => {
    return(
        <div className={``}>
            <div>
                <Link href='/api/auth/signin'>
                    <button className="bg-gradient-to-tl from-slate-50 to-blue-200 p-5 text-lg rounded-3xl shadow-xl hover:from-slate-800 hover:to-blue-950 hover:text-slate-50 hover:font-bold">Click here to authenticate</button>
                </Link>
            </div>
        </div>
    ); 
}

export default Auth; 