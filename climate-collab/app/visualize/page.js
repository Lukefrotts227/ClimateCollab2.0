"use client"; 

import { useSession } from "next-auth/react";

export default function Vis(){
    const session = useSession(); 
    console.log(session); 
    console.log(`session object is ${session}`)

    if(!session.data){
        router.push('/'); 
        return(<div>
            negative
        </div>)
    }
    return(
        <main>
            <header className="flex flex-row mb-12">
                <div className="w-full">
                    <Navbar />
                </div>
            </header>

        </main>
    )
}