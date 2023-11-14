export const normalizeVehicle = (standard, base, max, newPerc) =>{
    const min = 0; 
    const inter = max - base;
    const jumper = inter/100000;
    let percent; 
    // for every variable jumper of emissions we add 1 percent. The difference is between standard and newPerc
    // we need to add the difference to the base
    let diff = newPerc - base;
    let add = diff/jumper;
    percent = standard + add;


    return percent; 

}

