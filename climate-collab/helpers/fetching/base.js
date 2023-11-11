import prisma from "../prisma/prisma";

export const fetchRowBack = async (id) =>{
    try{
        const userData = await prisma.data.findMany({
            where: {
                userId: userId,
            }
        })
        return userData; 

    } catch(error){
        throw error; 
    } finally {
        await prisma.$disconnect();
      }

}