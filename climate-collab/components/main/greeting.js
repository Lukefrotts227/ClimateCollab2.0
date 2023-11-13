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

        <div>
            
        </div>
    </div>
    )
}

export default Greeting; 