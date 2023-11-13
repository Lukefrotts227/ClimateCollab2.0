import { NextResponse } from "next/server";
import { fetchRowBackVehicle } from "@/helpers/fetching/base";

async function handler(request){
    console.log('made it to backend'); 
    const body = await request.json().catch((err) => console.error(err)); 
    console.log(body); 
    const content = body; 
    console.log(body); 
    

    try{
        const rowData = await fetchRowBackVehicle(body.userId); 
        console.log('made it to the good place so posting was good!'); 
        return NextResponse.json(rowData); 

    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}



export {handler as POST}; 