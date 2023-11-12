import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

const BasicInfo = (userId, data) => {
    const [currentData, setCurrentData] = useState(data); 
    const [carChoice, setCarChoice] = useState(''); 
    const [fuelChoice, setFuelChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([false, false, false, false, false])
    const [milesPer, setMilesPer] = useState(-1);
    const [gasMilage, setGasMilage] = useState(-1); 

    const handleCarChoice = (e) =>{
        e.preventDefault(); 
        setCarChoice(e); 
    }

    const handleMilesPer = (e) =>{
        e.preventDefault(); 
        setMilesPer(e); 
    }

    const handleFuelChoice = (e) =>{
        e.preventDefault(); 
        setFuelChoice(e); 
    }
    
    const handleGasMilage = (e) =>{
        e.preventDefault(); 
        setGasMilage(e); 
    }

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
         
    }
    
    const handleSubmit = async (e) => {
        const content = {fuel: fuelChoice, car: carChoice, miles: milesPer, gasMilage: gasMilage, userId: userId}; 
        try{
            const response = await fetch('/api/user/postTransport', { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(content),

            })
        }catch(error){
            throw error; 
        }finally{
            console.log('success'); 
        }
    }

    return(
        <>
            <div className="">
                <div className="text-center p-3">
                    <h1 className="font-bold text-2xl ">The important information</h1>
                </div>
                <div className="text-center text-clip bg-gray-500 shadow-2xl rounded-md border-2 border-black">
                    <AnimatePresence>
                        {focusStore[0] && 
                        <motion.p 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}>
                        the type of car driven can determine the carbon emissions
                        </motion.p>} 

                        {focusStore[1] && 
                        <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The type of fuel you use in your car is important in finding out your emissions
                        </motion.p>}
                        {focusStore[2] && 
                        <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The gas milage of your vehicle determines that rate at which you burn fuel
                        </motion.p>}

                        {focusStore[3] && 
                        <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        of course how much you drive matters!
                        </motion.p>} 
                    </AnimatePresence>
                </div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400 max-w-3xl"> 
                    <form className='flex flex-col gap-3 items-center justify-center' onSubmit={handleSubmit}>   
                        <div className="flex flex-col">
                            <label>What kind of Car Do You Drive?</label>
                            <select onChange={handleCarChoice} onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)}>
                                <option value="" disabled selected hidden>{currentData.fuel || "Select a choice"}</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option value="don't">I don't drive</option>
                            </select>
                        </div>        
                        <div className="flex flex-col">
                            <label>What kind of Fuel does it use</label>
                            <select onChange={handleFuelChoice} onFocus={() => handleFocus(1)} onBlur={() => handleBlur(1)}>
                                <option value="" disabled selected hidden>{currentData.fuel || "Select a choice"}</option>
                                <option value="gas">Gas</option>
                                <option value="diesel">Diesel</option>
                                <option value="electric">Electric</option>
                            </select>
                        </div>        
                        <div className="flex flex-col">
                            <label>What is the gas milage of your vehicle</label>
                            <input className="mx-6" type="number" onChange={handleGasMilage} onFocus={() => handleFocus(2)} onBlur={() => handleBlue(2)} placeholder={currentData.gasMilage || "Enter the amount"}/>
                        </div>    

                        <div className="flex flex-col">
                            <label>How many miles do you drive per week?</label>
                            <input className="mx-6" type="number" onChange={handleMilesPer} onFocus={() => handleFocus(3)} onBlur= {() => handleBlur(3)} placeholder={currentData.miles || "Enter the amount"}/>
                        </div>
                        <button className="bg-white hover:bg-black text-black hover:text-white rounded-2xl shadow-md" type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

const MainInfo = () => {
    const [focusStore, setFocusStore] = useState([false, false]); 

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
         
    }
    
    const handleSubmit = (e) =>{

    }

    return(
        <>
            <div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                        <div>
                            <input className="mx-6"/>
                        </div>                    
                        <label></label>

                        <div>
                            <label></label>
                            <input className="mx-6"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const SomeInfo = () => {
    const [focusStore, setFocusStore] = useState([false, false]); 

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
         
    }
    
    
    const handleSubmit = (e) =>{

    }

    return(
        <>
            <div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                        <div>
                            <input className="mx-6"/>
                        </div>                    
                        <label></label>

                        <div>
                            <label></label>
                            <input className="mx-6"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const ExtraInfo = () => {
    const [focusStore, setFocusStore] = useState([false, false]); 

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
         
    }
    

    const handleSubmit = (e) => {

    }

    return(
        <>
            <div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                        <div>
                            <input className="mx-6"/>
                        </div>                    
                        <label></label>

                        <div>
                            <label></label>
                            <input className="mx-6"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export { BasicInfo, MainInfo, SomeInfo, ExtraInfo }; 