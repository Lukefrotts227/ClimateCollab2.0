import { NextResponse } from "next/server";
import { fetchRowBack } from "@/helpers/fetching/base";

async function handler(request){
    console.log('made it to backend'); 
    const body = await request.json().catch((err) => console.error(err)); 
    console.log(body); 
    const content = body; 
    console.log(body); 
    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
    }

    try{
        const rowData = await fetchRowBack(body); 
        console.log('made it to the good place so posting was good!'); 
        return NextResponse.json(rowData); 

    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}



export {handler as POST}; 