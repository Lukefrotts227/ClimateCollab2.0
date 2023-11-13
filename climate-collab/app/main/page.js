"use client"; 

import { useSession } from "next-auth/react";
import Greeting from "@/components/main/greeting";
import SignOut from "@/components/universal/signout";
import { BasicInfo, MainInfo, SomeInfo, ExtraInfo } from "@/components/main/forms";
import { useState, useEffect } from 'react'; 
import { useRouter } from "next/navigation";

export default function Main(){
    const session = useSession(); 
    const [userId, setUserId] = useState(session.data.userId); 
    const [data, setData] = useState({})
    const router = useRouter(); 
    console.log(session); 
    console.log(`session object is ${session}`)
    console.log(`user id is ${userId}`); 
    if(!userId){
        router.push('/'); 

        return(<div>
            negative
        </div>)
    }


    return(
        <main>
            <header className="h-12">
                <SignOut />
            </header>
            <section className="h-12 col-span-4 row-span-1">
                <Greeting />
            </section>
            <section className = "grid grid-cols-4 grid-rows-4 gap-y-24">  
                <div className="col-span-2 row-span-2 flex justify-center items-center">
                    <BasicInfo userId={userId} />
                </div>
                <div className="col-span-2 row-span-2 flex justify-center items-center">
                    <MainInfo />
                </div>
                <div className="col-span-2 row-span-2 flex justify-center items-center">
                    <SomeInfo />
                </div>
                <div className="col-span-2 row-span-2 flex justify-center items-center">
                    <ExtraInfo />
                </div>
            </section>
        </main>
    )
}