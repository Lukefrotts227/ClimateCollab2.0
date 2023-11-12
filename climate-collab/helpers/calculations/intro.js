// As far as the single calculations go javascript will alway suffice
// If the app scales the combined calculation is the only bottleneck I forsee in this case bringing in an external api may be benefical


const vehicleCalcSingle = (data) =>{
    const avg = 24024; // the average amount of emission in kg we use this as a baseline for the total calc 
    const standardCar = 'car'  // the most average car
    const standardFuel = 'gas' // the most average fuel
    const standardMiles = 260 // the most average miles
    const standarMilesPerGallon = 25 // the most average miles per gallon

    // we need to take into account the fact that the user may not enter everything
    // so we normalize then we return an object that contains ther perecent value along with our exact calculation
    // These are lightweight calculations that can be done with js and put anywwhere



}

export { vehicleCalc }; 