import React from 'react'; 
import { useSession } from 'next-auth/react'; 
import { useRouter } from 'next/navigation'; 
const Greeting = () => {
    const session = useSession(); 
    const router = useRouter(); 

    if(!session.data){
        router.push('/'); 
        return(
            <div>

            </div>
            )
    }

    return(
    <div>
        <div className='text-2xl text-center'>
            <h1>Welcome {session.data.user.name}</h1>
        </div>
    </div>
    )
}

export default Greeting; 