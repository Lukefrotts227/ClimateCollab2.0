// As far as the single calculations go javascript will alway suffice
// If the app scales the combined calculation is the only bottleneck I forsee in this case bringing in an external api may be benefical

import { normalizeVehicle } from './filter.js';

const vCalc = (car, fuel, mile, milesPerGallon) => {
    let emissionsFactor; 

    switch(fuelType) {
        case 'gas':
            emissionsFactor = 8.887; // kg CO2 per gallon for gasoline
            break;
        case 'diesel':
            emissionsFactor = 10.16; // kg CO2 per gallon for diesel
            break;
        case 'electric':
            emissionsFactor = 0; // Simplified for electric (actual calculation would be more complex)
            break;
        default:
            return 'Invalid fuel type';
    }
    const vehicleTypeEfficiency = {
        'car': 1, // baseline
        'suv': 0.8, // 20% less efficient than a car
        'truck': 0.7 // 30% less efficient than a car
    };
    let efficiencyModifier = vehicleTypeEfficiency[carType] || 1;
    let emissions = (milesPerWeek / (gasMileage * efficiencyModifier)) * emissionsFactor
    return emissions; 

}


const vehicleCalcSingle = (data) =>{
    const avgPerc = .41; 
    const standardCar = 'car'  // the most average car
    const standardFuel = 'gas' // the most average fuel
    const standardMiles = 260 // the most average miles
    const standarMilesPerGallon = 25 // the most average miles per gallon
    const avg = vCalc(standardCar, standardFuel, standardMiles, standarMilesPerGallon);

    // we need to take into account the fact that the user may not enter everything
    // so we normalize then we return an object that contains ther perecent value along with our exact calculation
    // These are lightweight calculations that can be done with js and put anywwhere

    let fuel = data.fuel || standardFuel;
    let car = data.car || standardCar;
    
    if(data.miles === -1){
        let miles = standardMiles;
    }else{
        let miles = data.miles;
    }
    if(data.gasMilage === -1){
        let gasMilage = standarMilesPerGallon;
    }else{
        let gasMilage = data.gasMilage;
    }
 
    
    
    // Calculate the percentage difference from the average
    let userEmissions; 
    let userPercent; 
    userEmissions = vCalc(car, fuel, miles, gasMilage);
    userPercent = normalizeVehicle(avgPerc, avg, avg*4, userEmissions)


    // Return an object with exact and percent values
    return {
        exactEmissions: userEmissions,
        emissionPercent: userPercent,
    };
    


}

export { vehicleCalc }; 