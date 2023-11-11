import React, { useState, useEffect } from 'react'; 

const BasicInfo = () => {
    const [carChoice, setCarChoice] = useState(''); 
    const [focusStore, setFocusStore] = useState([])
    const [milesPer, setMilesPer] = useState(-1);
    

    return(
        <>
            <div className="">
                <div className="text-center p-3">
                    <h1 className="font-bold text-2xl ">The important information</h1>
                </div>
                <div className="shadow-lg bg-blue-200 rounded-2xl p-8 border-2 border-blue-400">
                    <form className='flex flex-col gap-3 items-center justify-center'>
                        <div className="flex flex-col">
                            <label>What kind of Car Do You Drive?</label>
                            <select>
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