import React from 'react'; 
import { descript } from '../content';
const Description = () =>{
    return(
        <div className={``}>
            <div className="bg-slate-100 p-12 shadow-green-950 shadow-lg rounded-lg text-md max-w-3xl">
                <p>{descript}</p>
            </div>
        </div>
        
        )
}
export default Description; 