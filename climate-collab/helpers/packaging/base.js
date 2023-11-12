const packageTransport = (data) =>{
    const obj = JSON.parse(data); 
    const further = JSON.parse(obj.vehicleData)

    return further; 
}


export { packageTransport };  