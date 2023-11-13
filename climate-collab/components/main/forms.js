import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

const BasicInfo = (userId) => {
    const [data, setData] = useState('data'); 
    const [carChoice, setCarChoice] = useState(''); 
    const [fuelChoice, setFuelChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([false, false, false, false, false])
    const [milesPer, setMilesPer] = useState(-1);
    const [gasMilage, setGasMilage] = useState(-1); 
    const [user, setUser] = useState(userId); 
    useEffect(() =>{
        const grabData = async(userId) =>{
            console.log('use effect starting'); 
            try{
                const response = await fetch('/api/user/getUserData/vehicle', 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(userId),
                    }
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json(); 
                console.log(data); 
                setData(data)
                console.log(data); 

            }catch(error){
                console.error(error); 
            }finally{
                console.log('done'); 
            }
        }
        grabData(userId); 

    }, []); 

    

    const handleCarChoice = (e) =>{
        
        setCarChoice(e.target.value); 
    }

    const handleMilesPer = (e) =>{
        
        setMilesPer(e.target.value); 
    }

    const handleFuelChoice = (e) =>{
        e.preventDefault(); 
        setFuelChoice(e.target.value); 
    }
    
    const handleGasMilage = (e) =>{
        e.preventDefault(); 
        setGasMilage(e.target.value); 
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
        e.preventDefault();
        console.log('started function'); 
        const content = {fuel: fuelChoice, car: carChoice, miles: milesPer, gasMilage: gasMilage, userId: user}; 
        try{
            const response = await fetch('/api/user/post/vehicle', { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(content),

            })
            if(!response.ok){
                //console.log(response); 
                throw new Error(response.statusText);
            }else{
                const data = await response.json(); 
                console.log(data); 
                return data;9
            }
        }catch(error){
            console.error(error); 
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
                <div className="text-center text-clip bg-gray-800 text-slate-50 shadow-2xl rounded-md">
                    <AnimatePresence>
                        {focusStore[0] && 
                        <motion.p className='p-2 m-3'
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}>
                        the type of car driven can determine the carbon emissions
                        </motion.p>} 

                        {focusStore[1] && 
                        <motion.p className='p-2 m-3'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The type of fuel you use in your car is important in finding out your emissions
                        </motion.p>}
                        {focusStore[2] && 
                        <motion.p className='p-2 m-3'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The gas milage of your vehicle determines that rate at which you burn fuel
                        </motion.p>}

                        {focusStore[3] && 
                        <motion.p className='p-2 m-3'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        of course how much you drive matters!
                        </motion.p>} 
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center">
                    <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400 w-96"> 
                        <form className='flex flex-col gap-3 items-center justify-center' onSubmit={handleSubmit}>   
                            <div className="flex flex-col">
                                <label>What kind of Car Do You Drive?</label>
                                <select onChange={handleCarChoice} onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)}>
                                    <option value="" disabled selected hidden>{data.fuel || "Select a choice"}</option>
                                    <option value="car">Car</option>
                                    <option value="suv">Suv</option>
                                    <option value="truck">Truck</option>
                                    <option value="don't">I don't drive</option>
                                </select>
                            </div>        
                            <div className="flex flex-col">
                                <label>What kind of Fuel does it use</label>
                                <select onChange={handleFuelChoice} onFocus={() => handleFocus(1)} onBlur={() => handleBlur(1)}>
                                    <option value="" disabled selected hidden>{data.fuel || "Select a choice"}</option>
                                    <option value="gas">Gas</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electric">Electric</option>
                                </select>
                            </div>        
                            <div className="flex flex-col">
                                <label>What is the gas milage of your vehicle</label>
                                <input className="mx-6" type="number" onChange={handleGasMilage} onFocus={() => handleFocus(2)} onBlur={() => handleBlur(2)} placeholder={data.gasMilage || "Enter the amount"}/>
                            </div>    

                            <div className="flex flex-col">
                                <label>How many miles do you drive per week?</label>
                                <input className="mx-6" type="number" onChange={handleMilesPer} onFocus={() => handleFocus(3)} onBlur= {() => handleBlur(3)} placeholder={data.miles || "Enter the amount"}/>
                            </div>
                            <button className="bg-white hover:bg-black text-black hover:text-white rounded-2xl shadow-md px-4 py-2" type="submit" >Submit</button>
                        </form>
                    </div>
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