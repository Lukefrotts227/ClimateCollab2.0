import { NextResponse } from "next/server";
import { fetchRowBack } from "@/helpers/fetching/base";

async function handler(request){
    const body = await request.json(); 
    const content = body; 
    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
    }

    try{
        rowData = await fetchRowBack(body); 
        return NextResponse.json(rowData); 

    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}



export {handler as POST}; 