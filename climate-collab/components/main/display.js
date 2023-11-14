import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const PersonalDisplay = ({ userId, oddity, setOddity }) =>{
    const [amount, setAmount ] = useState(0);

    return(
        <div>
            <motion.div className="w-0 h-10">

            </motion.div>

        </div>
    )
}

export { PersonalDisplay }; 