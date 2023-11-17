import { useState } from 'react';
import {Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover} from 'react-aria-components';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ModeSwap01 = ({ mode, setMode }) =>{
    const [selectedMode, setSelectedMode] = useState(mode);
    
    const handleModeSwap = (e) => {
        e.preventDefault(); 
        setSelectedMode(e.target.value);
        setMode(e.target.value); 
    }

    return(
        <div>
            <ComboBox>
                <Label>Swap The Mode</Label>
                <Input value={selectedMode} onChange={handleModeSwap} />
                <Button>
                    <MdOutlineKeyboardArrowDown size={22} />
                </Button>
                <Popover>
                    <ListBox>
                        <ListBoxItem onClick={() => handleModeSwap({target: {value: 'everything'}})}>Show Everything</ListBoxItem>
                        <ListBoxItem onClick={() => handleModeSwap({target: {value: 'vehicle'}})}>Only Vehicle</ListBoxItem>
                    </ListBox>
                </Popover>
            </ComboBox>
        </div>
    )

}


export { ModeSwap01 }; 