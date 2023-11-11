import prisma from "../prisma/prisma";

const postTransBack = async (userId, data) =>{
    const update = await prisma.data.upsert({
            where:{ userId}, 
            update: {
                vehicleData:data,
            },
            create:{
                userId:userId,
                vehicleData:data,
            }
        },
    )
}


export { postTransBack }; 