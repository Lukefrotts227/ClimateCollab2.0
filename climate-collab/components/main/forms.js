import React, { useState, useEffect } from 'react'; 

const BasicInfo = () => {
    const [carChoice, setCarChoice] = useState(''); 
    const [milesPer, setMilesPer] = useState(-1);

    return(
        <>
            <div className="shadow-lg bg-blue-200 rounded-2xl p-8">
                <form className='flex flex-col gap-3 items-center justify-center'>
                    <div>
                        <label>What kind of Car Do You Drive?</label>
                        <select>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>                    

                    <div>
                        <label></label>
                        <input className="mx-6"/>
                    </div>
                </form>
            </div>
        </>
    );
}

const MainInfo = () => {

    return(
        <>
            <div className="shadow-lg bg-blue-200 rounded-2xl p-8">
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
        </>
    );
}

const SomeInfo = () => {

    return(
        <>
            <div className="shadow-lg bg-blue-200 rounded-2xl p-8">
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
        </>
    );
}

const ExtraInfo = () => {

    return(
        <>
            <div className="shadow-lg bg-blue-200 rounded-2xl p-8">
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
        </>
    );
}

export { BasicInfo, MainInfo, SomeInfo, ExtraInfo }; 