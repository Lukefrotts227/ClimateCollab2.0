import React from 'react'; 
import { useSession } from 'next-auth/react'; 
import { useRouter } from 'next/navigation'; 
import { greetingExplain } from '../content/main';
import { LuSprout } from "react-icons/lu";

const Greeting = () => {
    const session = useSession(); 
    const router = useRouter(); 

    if(!session.data){
        router.push('/'); 
        return(
            <div>
                Negative
            </div>
            )
    }

    return(
    <div className="mb-10">
        <div className='text-4xl text-center'>
            <h1>Welcome {session.data.user.name}</h1>
        </div>
        <div className="text-3xl text-center">
            <h2>This is the Main page of the Climate Collab</h2>
        </div>

        <div className="flex justify-center">
            <div className=" w-5/12 bg-gradient-to-tl from-slate-50 to-slate-200 shadow-lg rounded-full font-bold text-black text-center m-8 p-10 text-lg mx-24">
                <p>{greetingExplain}</p>
            </div>
        </div>

        <div className="flex justify-center">
            <LuSprout size={112} />
        </div>

    </div>
    )
}

export default Greeting; 