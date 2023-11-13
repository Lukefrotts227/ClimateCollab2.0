import { NextResponse } from "next/server";
import { postTransBack } from "@/helpers/fetching/posting";

async function handler(request){
    console.log("made it to back"); 
    const body = await request.json(); 
    const content = body; 
    console.log(body); 

    try{
        const data = {fuel: content.fuel, car: content.car, miles: content.miles, gasMilage: content.gasMilage}
        const userId = content.userId; 
        console.log(userId)
        console.log('posting....'); 
        const posting = await postTransBack(userId.userId, JSON.stringify(data)); 
        console.log('posted'); 
        return NextResponse.json({message: 'success'}, {status: 200})

    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})   
    }
}

export { handler as POST }; 
