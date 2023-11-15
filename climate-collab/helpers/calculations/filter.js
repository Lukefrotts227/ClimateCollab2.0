export const normalizeVehicle = (standard, base, max, newPerc) =>{
    if(newPerc < 1){
        return 100; 
    }
    const min = 0; 
    const inter = max - base;
    const jumper = inter/145;
    let percent; 
    // for every variable jumper of emissions we add 1 percent. The difference is between standard and newPerc
    // we need to add the difference to the base
    let diff = base - newPerc;
    let add = diff/jumper;
    percent = standard + add;
    if(percent > 100){
        return 100; 
    }


    return percent; 

}

