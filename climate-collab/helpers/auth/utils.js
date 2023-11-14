import prisma from "../prisma/prisma";
import { getSession } from "next-auth/react";



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

