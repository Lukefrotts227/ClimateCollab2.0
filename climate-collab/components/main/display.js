import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import * as Progress from '@radix-ui/react-progress';

const PersonalDisplayVehicle = ({ userId, setUserId,  oddity, setOddity }) =>{
    const [final, setFinal] = useState(0); 
    

    // so I can refetch and rerender the component when needed
    useEffect(() => {
        const grabCalc = async(userId) =>{
            try{
                const response = await fetch('/api/user/calculations/vehicle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(userId), 
    
                })
                if(!response.ok){
                    throw new Error('Network response was not ok ' + response.statusText);              
                }
                const data = await response.json(); 
                setFinal(data); 

            } catch(error){
                console.error(error); 
            } finally{
                console.log('done'); 
            }
        }
        grabCalc(userId);
    }, [oddity]);

    return(
        <div>
            <Progress.Root className="h-2 w-96 rounded-full bg-gray-300">
                <Progress.Label className="text-black text-center">{Math.round(final.emissionPercent)}%</Progress.Label>
                <Progress.Bar className="rounded-full bg-green-500" style={{width: `${Math.round(final.emissionPercent)}%`}}/>
            </Progress.Root>   
        </div>
    )
}

export { PersonalDisplayVehicle }; 