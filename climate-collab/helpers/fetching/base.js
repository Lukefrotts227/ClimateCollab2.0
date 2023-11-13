import prisma from "../prisma/prisma";

export const fetchRowBackVehicle = async (id) =>{
    try{
        const userData = await prisma.VehicleData.findMany({
            where: {
                userId: id,
            }
        })
        return userData; 

    } catch(error){
        throw error; 
    } finally {
        await prisma.$disconnect();
      }

}