"use client"; 

import { useSession } from "next-auth/react";
import Greeting from "@/components/main/greeting";
import SignOut from "@/components/universal/signout";
import { BasicInfo, MainInfo, SomeInfo, ExtraInfo } from "@/components/main/forms";
import { useState, useEffect } from 'react'; 

export default function Main(){
    const session = useSession(); 
    const [userId, setUserId] = useState(session.data.user.userId); 
    const [data, setData] = useState({})

    useEffect(() =>{
        const grabData = async(userId) =>{
            try{
                const response = await fetch('/api/user/getUserData', 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(userId),
                    }
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json(); 
                setData(JSON.parse(data))

            }catch(error){
                console.error(error); 
            }finally{
                console.log('done'); 
            }
        }
        grapData(userId); 

    }, []); 

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