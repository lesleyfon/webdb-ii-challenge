const db = require('./../helpers/cars');
const validateId = () => async (req, res, next)=>{
    const id = req.params.id;
    if(!id){
        return res.status(500).json({
            message: `Couldn't read id of ${id}`
        })
    }
    const car = await db.fetchCarAt(id).first();
    req.car = car;
    try {
        //if we cant find car at a particular id we return an error message
        !car 
            ?
        res.status(500).json({
        message: `Couldn't get car at id of ${id}, \n ${car} in the database`
        })
            :
        //if we go find the car we run the next piece of middleware
        next();
    } catch (error) {
        next(new Error(error))
    }
   
}
const validateCarBody = () => async (req, res, next)=>{
    const { VIN, make, model, mileage } = req.body;
    if(!VIN ||!make ||!model || !mileage){
        return res.status(400).json({
            message: `Please make sure you are inputing all the right request body for the api call`,
            error: `
                VIN: ${VIN},
                make: ${make},
                model: ${model}
                mileage: ${mileage}
            `
        })
    }
    try {
        req.car = { VIN, make, model, mileage };
        next();

    } catch (error) {
        next(new Error(error))
    }
}
module.exports={
    validateId, 
    validateCarBody
}