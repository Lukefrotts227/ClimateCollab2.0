"use client"; 

import { useSession } from "next-auth/react";
import Greeting from "@/components/main/greeting";
import SignOut from "@/components/universal/signout";
import { BasicInfo, MainInfo, SomeInfo, ExtraInfo } from "@/components/main/forms";
import { useState } from 'react'; 

export default function Main(){
    const session = useSession(); 
    const [userId, setUserId] = useState(session.data.user.userId); 

    return(
        <main>
            <header className="h-12">
                <SignOut />
            </header>
            <div className="h-12 col-span-4 row-span-1">
                    <Greeting />
                </div>
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