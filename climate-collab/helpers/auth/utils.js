import prisma from "../prisma/prisma";
import { getSession } from "next-auth/react";

export const fetchUserData = async () =>{
    const res = await fetch('/api/user'); 
    if(!res.ok){
        throw new Error('Failed to fet user data'); 
    }
    return await res.json(); 
}



export const getUser = async (req) =>{

    const session = await getSession({ req }); 

    if(session){
        const user = await prisma.user.findUnique({
            where: { id: session.user.id}, 
        });
        return user; 
    }
    return null; 
}


