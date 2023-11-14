import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const PersonalDisplay = ({ userId, oddity, setOddity }) =>{
    const [amount, setAmount ] = useState(0);
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
    }, [oddity]);

    return(
        <div>
            <motion.div className="w-0 h-10">

            </motion.div>

        </div>
    )
}

export { PersonalDisplay }; 