import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () =>{
    const router = useRouter(); 
    const exitFun = () =>{
        router.push('/'); 
        signOut(); 
        sessionStorage.clear(); 
    }
    return(
        <div>
            <button className="text-2xl p-3 bg-white text-black shadow-lg rounded-md hover:bg-black hover:text-white" onClick={exitFun}>Sign Out</button>
        </div>
        ); 
}

export default SignOut; 