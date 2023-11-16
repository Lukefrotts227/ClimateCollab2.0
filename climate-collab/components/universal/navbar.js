import React from 'react'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { signOut } from "next-auth/react";


const Navbar = () =>{
    const router = useRouter(); 
    const exitFun = () =>{
        router.push('/'); 
        signOut(); 
        sessionStorage.clear(); 
    }
    
        return(
            <nav className="w-full h-full bg-gradient-to-tl from-gray-300 to-slate-300 shadow-lg rounded-md flex flex-row justify-between items-center gap-4 px-40 mb-2 pb-1">
                <div onClick={exitFun}>
                    <div className="text-2xl hover:font-bold hover:text-3xl hover:text-green-500">
                        <button>SignOut</button>
                    </div>
                </div>
                <Link href="/about">
                    <div className="text-2xl hover:font-bold hover:text-3xl hover:text-green-500">
                        <button>About</button>
                    </div>
                </Link>

                <Link href="/visualize">
                    <div className="text-2xl hover:font-bold hover:text-3xl hover:text-green-500">
                        <button>Visualize</button>
                    </div>
                </Link>
            </nav>
            ); 
}

export default Navbar; 
