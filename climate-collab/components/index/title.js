import React from 'react'; 
import { Macondo } from 'next/font/google';
const font = Macondo({ subsets: ['latin'], weight: "400"}); 
const Title = () =>{

    return(
        <div className={`${font.className}`}>
            <div className="text-6xl font-bold text-center">
                <h1>Welcome to The Climate Collab</h1>
            </div>
        </div>
    );
}

export default Title; 