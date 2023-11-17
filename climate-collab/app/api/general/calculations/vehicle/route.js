import { NextResponse } from "next/server";
import { fetchAllVehicle } from "@/helpers/fetching/base";
import { vehicleCalcMulti } from "@/helpers/calculations/intro";

async function handler(request){

    try{
        const data = await fetchAllVehicle(); 
        console.log('here is the data'); 
        console.log(data); 
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            dataArr.push(JSON.parse(data[i].vehicleData)); 
        }
        const calc = vehicleCalcMulti(dataArr);
        return NextResponse.json(calc, {status:200}); 
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500}); 

    }
}

export {handler as GET};