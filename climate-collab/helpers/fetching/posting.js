import prisma from "../prisma/prisma";

const postTransBack = async (userId, data) =>{

    console.log(userId); 
    const find = await prisma.VehicleData.findUnique({
        where: {userId: userId},
    },
    )
    if(find){
        const update = await prisma.VehicleData.update({    
            where:{ userId: userId }, 
            data: {
                vehicleData:data,
            },
        },
        )

    }else{
        const create = await prisma.VehicleData.create({
            data:{
                userId:userId,
                vehicleData:data,
            }
        })

    }
}


export { postTransBack }; 