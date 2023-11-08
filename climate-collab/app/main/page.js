"use client"; 

import Greeting from "@/components/main/greeting";
import SignOut from "@/components/universal/signout";

export default function Main(){

    return(
        <main>
            <SignOut />
            <Greeting />
        </main>
    )
}