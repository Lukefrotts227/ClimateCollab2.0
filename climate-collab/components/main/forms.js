import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const BasicInfo = ({ userId, setUserId, oddity, setOddity }) => {
    const [data, setData] = useState(''); 
    const [carChoice, setCarChoice] = useState(''); 
    const [fuelChoice, setFuelChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([false, false, false, false, false])
    const [anyFocus, setAnyFocus] = useState(false);
    const [milesPer, setMilesPer] = useState(-1);
    const [gasMilage, setGasMilage] = useState(-1); 
    const [disabled, setDisabled] = useState(false);
    const [submissionAnimate, setSubmissionAnimate] = useState(false);
    useEffect(() =>{
        const grabData = async(id) =>{
            console.log('use effect starting'); 
            console.log(id); 
            try{
                
                const response = await fetch('/api/user/getUserData/vehicle', 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(id),
                    }
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log(data);
                const final = JSON.parse(data[0].vehicleData); 
                
                setData(final); 

            }catch(error){
                console.error(error); 
            }finally{
                
                console.log('done'); 
            }
        }
        grabData(userId); 
        setOddity(123); 

    }, []); 

    

    const handleCarChoice = (e) =>{
        
        setCarChoice(e.target.value); 
        if(carChoice === "don't"){
            console.log('do it'); 
            setDisabled(true); 
        }
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
        setAnyFocus(true); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
        setAnyFocus(false); 
         
    }
    const checker = (value) => {
        if(value === -1){
            console.log('this'); 
            return false;
        }
        if (!value){
            console.log('that'); 
            return false;
        }
        console.log('then'); 
        return value;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionAnimate(true); 
        console.log('started function'); 
        let fuel; 
        let car; 
        let miles; 
        let gas; 
        if(fuelChoice === ''){
            fuel=data.fuel; 
        }else{
            fuel = fuelChoice; 
        }
        if(carChoice === ''){
            car=data.car;
        }else{
            car = carChoice; 
        }
        if(milesPer === -1){
            miles = data.miles;
        }else{
            miles = milesPer;
        }
        if(gasMilage === -1){
            gas = data.gasMilage;
        }else{
            gas = gasMilage;
        }
        if(carChoice === "don't"){
            miles = 0; 
            gas = 0; 
        }
        const content = {fuel: fuel, car: car, miles: miles, gasMilage: gas, userId: userId}; 
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
            setSubmissionAnimate(false);
            setOddity(124);
        }
    }

    return(
        <>
            <div className="">
                <div className={`text-center text-clip ${anyFocus ? 'bg-gray-800 text-slate-50 rounded-md text-sm' : ''} h-10 m-7 p-2`}>
                    <AnimatePresence>
                        {focusStore[0] && 
                        <motion.p className=''
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}>
                        the type of car driven can determine the carbon emissions
                        </motion.p>} 

                        {focusStore[1] && 
                        <motion.p className=''
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The type of fuel you use in your car is important in finding out your emissions
                        </motion.p>}
                        {focusStore[2] && 
                        <motion.p className=''
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        The gas milage of your vehicle determines that rate at which you burn fuel
                        </motion.p>}

                        {focusStore[3] && 
                        <motion.p className=''
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
                            <div className="text-center pb-5">
                                <h1 className="font-bold text-2xl ">Vehicle Information</h1>
                            </div>
                            <div className="flex flex-col">
                                <label>What kind of Car Do You Drive?</label>
                                <select onChange={handleCarChoice} onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)}>
                                    <option value="" disabled selected hidden>{data.car || "Select a choice"}</option>
                                    <option value="car">Car</option>
                                    <option value="suv">Suv</option>
                                    <option value="truck">Truck</option>
                                    <option value="don't">I don't drive</option>
                                </select>
                            </div>        
                            <div className="flex flex-col">
                                <label>What kind of Fuel does it use</label>
                                <select onChange={handleFuelChoice} onFocus={() => handleFocus(1)} onBlur={() => handleBlur(1)} disabled={disabled}>
                                    <option value="" disabled selected hidden>{data.fuel || "Select a choice"}</option>
                                    <option value="gas">Gas</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electric">Electric</option>
                                </select>
                            </div>        
                            <div className="flex flex-col">
                                <label>What is the gas milage of your vehicle</label>
                                <input className="mx-6" type="number" step="0.1" onChange={handleGasMilage} onFocus={() => handleFocus(2)} onBlur={() => handleBlur(2)} placeholder={checker(data.gasMilage) || "Enter the amount"} disabled={disabled}/>
                            </div>    

                            <div className="flex flex-col">
                                <label>How many miles do you drive per week?</label>
                                <input className="mx-6" type="number" step="0.1" onChange={handleMilesPer} onFocus={() => handleFocus(3)} onBlur= {() => handleBlur(3)} placeholder={checker(data.miles) || "Enter the amount"} disabled={disabled}/>
                            </div>
                            <button className="bg-white hover:bg-black text-black hover:text-white rounded-2xl shadow-md px-4 py-2" type="submit" >Submit</button>
                            {submissionAnimate && <FaSpinner className="animate-spin"/>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

const MainInfo = () => {
    const [focusStore, setFocusStore] = useState([false, false]); 
    const [anyFocus, setAnyFocus] = useState(false);

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
        setAnyFocus(true); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
        setAnyFocus(false); 
         
    }
    
    const handleSubmit = (e) =>{

    }

    return(
        <>
            <div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                        <div className="text-center pb-5">
                            <h1 className="font-bold text-2xl ">Food Information</h1>
                        </div>
                        <div className="flex flex-col"> 
                            <label></label>
                            <input className="mx-6"/>
                        </div>                    

                        <div className="flex flex-col">
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
    const [anyFocus, setAnyFocus] = useState(false);

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
        setAnyFocus(true);
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
        setAnyFocus(false); 
         
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
    const [anyFocus, setAnyFocus] = useState(false);

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
        setAnyFocus(true);
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
        setAnyFocus(false); 
         
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