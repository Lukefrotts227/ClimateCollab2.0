import { NextResponse } from "next/server";
import { fetchAllVehicle } from "@/helpers/fetching/base";
import { vehicleCalcMulti } from "@/helpers/calculations/intro";

async function handler(request){

    try{
        const data = await fetchAllVehicle(); 
        console.log(data); 
        return NextResponse.json({message: "testing"}, {status:200}); 
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500}); 

    }
}

export {handler as GET};