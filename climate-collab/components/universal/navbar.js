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
            <nav className="w-full h-full bg-gray-400 shadow-lg rounded-md flex flex-row justify-between gap-4 p-8">
                <div onClick={exitFun}>
                    <div>
                        <button>SignOut</button>
                    </div>
                </div>
                <Link href="/about">
                    <div>
                        <button>About</button>
                    </div>
                </Link>
            </nav>
            ); 
}

export default Navbar; 
