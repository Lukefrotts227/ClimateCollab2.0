"use client"; 

import { useSession } from "next-auth/react";
import Greeting from "@/components/main/greeting";
import Navbar from "@/components/universal/navbar";
import { BasicInfo, MainInfo, SomeInfo, ExtraInfo } from "@/components/main/forms";
import { useState, useEffect } from 'react'; 
import { useRouter } from "next/navigation";

export default function Main(){
    const session = useSession(); 
    const [userId, setUserId] = useState(session.data.userId); 
    
    const router = useRouter(); 
    console.log(session); 
    console.log(`session object is ${session}`)
    console.log(`user id is ${userId}`); 
    if(!session){
        router.push('/'); 
        return(<div>
            negative
        </div>)
    }
    if(!userId){
        router.push('/'); 

        return(<div>
            negative
        </div>)
    }


    return(
        <main>
            <header className="flex flex-row h-16 mb-6">
                <div className="w-full">
                    <Navbar type={0} />
                </div>
            </header>
            <section className="">
                <Greeting />
            </section>
            <section className = "grid grid-cols-2 grid-rows-2 gap-y-24">  
                <div className="col-span-1 row-span-1 flex justify-center">
                    <BasicInfo userId={userId} />
                </div>
                <div className="col-span-1 row-span-1 flex justify-center">
                    <MainInfo />
                </div>
                <div className="col-span-1 row-span-1 flex justify-center">
                    <SomeInfo />
                </div>
                <div className="col-span-1 row-span-1 flex justify-center">
                    <ExtraInfo />
                </div>
            </section>
        </main>
    )
}