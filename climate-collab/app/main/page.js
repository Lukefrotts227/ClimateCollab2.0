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
            <section className = "grid place-items-center">  
                <div className="h-12">
                    <Greeting />
                </div>
                <BasicInfo />
            </section>
        </main>
    )
}