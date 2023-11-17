"use client"; 

import { useSession } from "next-auth/react";
import Greeting from "@/components/main/greeting";
import Navbar from "@/components/universal/navbar";
import { BasicInfo, MainInfo, SomeInfo, ExtraInfo } from "@/components/main/forms";
import { useState, useEffect } from 'react'; 
import { useRouter } from "next/navigation";
import { PersonalDisplayVehicle, NetDisplayVehicle } from "@/components/main/display";
import { ModeSwap01 } from "@/components/main/master";

// lazy load to see animation and for performance
//import dynamic from 'next/dynamic'
//const PersonalDisplay = dynamic(() => import('@/components/main/personalDisplay'), { ssr: false }); 

export default function Main(){
    const router = useRouter(); 
    const session = useSession(); 
    if(!session.data){
        router.push('/'); 
        return(<div>
            negative
        </div>)
    }
    const [userId, setUserId] = useState(session.data.userId); 
    const [oddity, setOddity] = useState(0); 
    const [mode, setMode] = useState('everything'); 
     
    console.log(session); 
    console.log(`session object is ${session}`)

    useEffect(() => {
        console.log("what i testing now"); 
        console.log(session); 
        console.log(session.data); 
        console.log(session.data.userId); 
        setUserId(session.data.userId);
        console.log(userId);
    }, []);



    return(
        <main>
            <header className="flex flex-row mb-12">
                <div className="w-full">
                    <Navbar />
                </div>
            </header>
            <section className="">
                <Greeting />
            </section>

            <section>
                <ModeSwap01 mode={mode} setMode={setMode} />
            </section>

            { mode === 'everything' &&
            <section>
                <section className = "grid grid-cols-2 grid-rows-2 gap-y-24">  
                    <div className="col-span-1 row-span-1 flex justify-center">
                        <BasicInfo userId={userId} setUserId={setUserId} oddity={oddity} setOddity={setOddity}/>
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

                <footer className="m-8 ">
                    <h1 className="text-2xl font-bold text-center pb-5">Vehicle</h1>
                    <PersonalDisplayVehicle userId={userId} setUserId={setUserId} oddity={oddity} setOddity={setOddity} />
                    <NetDisplayVehicle oddity={oddity} setOddity={setOddity} />
                </footer>
            </section>
            }

            { mode === 'vehicle' &&
            
            <section>
                <section className="flex justify-center m-8">
                    <BasicInfo userId={userId} setUserId={setUserId} oddity={oddity} setOddity={setOddity}/>
                </section>
                <footer className="m-8 ">
                    <h1 className="text-2xl font-bold text-center pb-5">Vehicle</h1>
                    <PersonalDisplayVehicle userId={userId} setUserId={setUserId} oddity={oddity} setOddity={setOddity} />
                    <NetDisplayVehicle oddity={oddity} setOddity={setOddity} />
                </footer>
            </section>
            }
        </main>
    )
}