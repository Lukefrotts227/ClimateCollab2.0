import React, { useState, useEffect } from 'react'; 

const BasicInfo = (userId, data) => {
    const [currentData, setCurrentData] = useState(data); 
    const [carChoice, setCarChoice] = useState(''); 
    const [fuelChoice, setFuelChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([false, false, false, false, false])
    const [milesPer, setMilesPer] = useState(-1);

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

    const handleFocus = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? true : item);
        setFocusStore(updatedFocusStore); 
    }
    const handleBlur = (inp) =>{
        const updatedFocusStore = focusStore.map((item, i) => i === inp ? false : item);
        setFocusStore(updatedFocusStore)
         
    }
    
    const handleSubmit = async (e) => {
        const content = {fuel: fuelChoice, car: carChoice, miles: milesPer, userId: userId}; 
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
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400" onSubmit={handleSubmit}> 
                    <form className='flex flex-col gap-3 items-center justify-center'>
                    {focusStore[0] && <p>the type of car driven can determine the carbon emissions</p>} 
                    {focusStore[1] && <p>The type of fuel you use in your car is important in finding out your emissions</p>}
                    {focusStore[2] && <p>of course how much you drive matters!</p>}    
                        <div className="flex flex-col">
                            <label>What kind of Car Do You Drive?</label>
                            <select onChange={handleCarChoice} onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)}>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option>I don't drive</option>
                            </select>
                        </div>        
                        <div className="flex flex-col">
                            <label>What kind of Fuel does it use</label>
                            <select onChange={handleFuelChoice} onFocus={() => handleFocus(1)} onBlur={() => handleBlur(0)}>
                                <option>Gas</option>
                                <option>Diesel</option>
                                <option>Electric</option>
                            </select>
                        </div>            

                        <div className="flex flex-col">
                            <label>How many miles do you drive per week?</label>
                            <input className="mx-6" type="number" onChange={handleMilesPer} onFocus={() => handleFocus(2)} onBlur= {() => handleBlur(2)} />
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