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
            <h1>Personal</h1>
            <Progress.Root 
            value={Math.round(final.emissionPercent)} 
            max={100} 
            className="relative h-6 w-full overflow-hidden bg-gray-200 rounded-full"
            >
                <Progress.Indicator 
                className="absolute bg-blue-600 h-full"
                style={{ width: `${Math.round(final.emissionPercent)}%`, transition: 'width 0.5s ease-in-out' }}
                />
            </Progress.Root>
        </div>
    )
}

const NetDisplayVehicle = ({ oddity, setOddity }) =>{
    const [final, setFinal] = useState(0);
    useEffect (() => {
        const grabCalc = async() =>{
            try{
                const response = await fetch('/api/general/calculations/vehicle', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }, 
    
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
        grabCalc();     
    }, [oddity]);

    return(
        <div>
            <h1>Group</h1>
           <Progress.Root 
            value={Math.round(final.emissionPercent)} 
            max={100} 
            className="relative h-6 w-full overflow-hidden bg-gray-200 rounded-full"
            >
                <Progress.Indicator 
                className="absolute bg-blue-600 h-full"
                style={{ width: `${Math.round(final.emissionPercent)}%`, transition: 'width 0.5s ease-in-out' }}
                />
            </Progress.Root>
        </div>
    );
}

export { PersonalDisplayVehicle, NetDisplayVehicle }; 