import React from 'react'; 
import Link from 'next/link';


const Navbar = ({ type = 0 }) =>{
    if(type===0){
        return(
            <nav className="w-full h-full bg-gray-400 shadow-lg rounded-md p-3">

            </nav>
            ); 
    }
}

export default Navbar; 
