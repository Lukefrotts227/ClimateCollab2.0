import React, { useState, useEffect } from 'react'; 

const BasicInfo = () => {

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