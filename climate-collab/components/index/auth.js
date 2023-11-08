import Link from "next/link";
import React from 'react'; 

const Auth = () => {
    return(
        <div>
            <Link href='/api/auth/signin'>
                <button>Click here to authenticate</button>
            </Link>
        </div>
    ); 
}

export default Auth; 