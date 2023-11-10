"use client"; 

import Greeting from "@/components/main/greeting";
import SignOut from "@/components/universal/signout";
import BasicInfo from "@/components/main/basicinfo";

export default function Main(){

    return(
        <main>
            <header className="h-12">
                <SignOut />
            </header>
            <section className = "grid grid-cols-4 grid-rows-7 gap-5">  
                <div className="h-12 col-span-4 row-span-1">
                    <Greeting />
                </div>
                <div className="col-span-2 row-span-2">
                    <BasicInfo />
                </div>
                <div className="col-span-2 row-span-2">

                </div>
                <div className="col-span-2 row-span-2">

                </div>
                <div className="col-span-2 row-span-2">

                </div>
                <div className='col-span-4 row-span-2'>

                </div>
            </section>
        </main>
    )
}