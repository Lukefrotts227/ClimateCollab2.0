import { vehicleCalcSingle } from "@/helpers/calculations/intro";
import { NextResponse } from "next/server";

async function handler(request){
    console.log('made it to the v calc'); 
    const body = await request.json().catch((err) => console.error(err));
    const content = body; 

    try{
        const data = await fetchRowBackVehicle(content.userId); 
        const fin = JSON.parse(data[0].vehicleData)
        const calc = vehicleCalcSingle(fin); 
        console.log(calc); 
        return NextResponse.json(calc, {status: 200}); 
        
    } catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}

export {handler as POST}; 