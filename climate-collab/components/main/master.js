import { Menu, Transition } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ModeSwap01 = ({ mode, setMode }) =>{
    const [selectedMode, setSelectedMode] = useState(mode);
    
    const handleModeSwap = (value) => {
        setSelectedMode(value);
        setMode(value); 
        console.log(`mode is ${mode}`); 
    }

    return(
        <div className="flex justify-center items-center relative">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white">
                        Modes
                        <MdOutlineKeyboardArrowDown className="inline-block -mr-1 ml-2 h-5 w-5" />
                    </Menu.Button>
                </div>
                <Transition
                as="div"
                className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                    
                    <Menu.Items className = "flex flex-col">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`hover:bg-blue-500 ${mode === 'everything' ? "bg-green-400" : ""}`} onClick={() => handleModeSwap('everything')}>
                                    Everything
                                </button>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <button className={`hover:bg-blue-500 ${mode === 'vehicle' ? "bg-green-400" : ""}`} onClick={() => handleModeSwap('vehicle')}>
                                    Vehicle
                                </button>
                            )}
                        </Menu.Item>

                    </Menu.Items>
                    

                </Transition>
            </Menu>
        </div>
    )

}


export { ModeSwap01 }; 