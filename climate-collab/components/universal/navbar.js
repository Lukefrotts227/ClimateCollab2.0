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
            <nav className="w-full h-full bg-gray-400 shadow-lg rounded-md p-3">
                <div onClick={exitFun}>
                    <div>
                        <button>SignOut</button>
                    </div>
                </div>

            </nav>
            ); 
}

export default Navbar; 
