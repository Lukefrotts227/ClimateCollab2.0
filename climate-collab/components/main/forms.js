import React, { useState, useEffect } from 'react'; 

const BasicInfo = () => {
    const [carChoice, setCarChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([false, false])
    const [milesPer, setMilesPer] = useState(-1);

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
            <div className="">
                <div className="text-center p-3">
                    <h1 className="font-bold text-2xl ">The important information</h1>
                </div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                    {focusStore[0] && <p>the type of car driven can determine the carbon emissions</p>}     
                        <div className="flex flex-col">
                            <label>What kind of Car Do You Drive?</label>
                            <select onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)}>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option>I don't drive</option>
                            </select>
                        </div>                    

                        <div className="flex flex-col">
                            <label>How many miles do you drive per week?</label>
                            <input className="mx-6" type="number"/>
                        </div>
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