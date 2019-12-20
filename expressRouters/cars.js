const express = require('express');
const router = express();
const {validateId, validateCarBody} = require('./../expressMiddleware/carsMiddleware')
const db = require('./../helpers/cars');

router.get('/', async (req, res, next) => {
    const cars = await db.fetchCars();
    res.status(200).json({
        message: 'Fetch successful',
        cars: cars
    })
});
router.get('/:id', validateId(), (req, res, next) => {
    const car = req.validatedCarId
    res.status(200).json({
        message: "successful",
        car: car
    });
});

router.post('/', validateCarBody(), async (req, res, next)=> {
    const car = req.validatedCarBody;
   try {
    res.status(200).json({
        message: 'Post successful',
        post:  await db.postCar(car)
    })
   } catch (error) {
       res.status(400).json({
           error: error,
           message: `Car at ${car['VIN']} already exist`
       })
   }
    
}); 

router.delete('/:id', validateId(), async (req, res, next) => {
    const carId = req.validatedCarId.id
    try {

        res.status(201).json({
            message: `car at ${carId} has been successfully deleted`,
            deleteCount: await db.deleteCar(carId)
        })
      next()
    } catch (error) {
        res.status(400).json({
            error: error,
        })
    }
});

router.put('/:id', validateId(), validateCarBody(), async (req, res, next) => {
    const carUpdate = req.validatedCarBody;
    const carId = req.validatedCarId.id;
    try {
        res.status(200).json({
            message: 'Update successful',
            rowsAffected: await db.updateCar(carId, carUpdate)
        })
    } catch (error) {

       res.status(500).json({ error: error}) 
    }
})
module.exports = router;