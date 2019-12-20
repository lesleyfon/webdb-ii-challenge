const express = require('express');
const router = express();
const db = require('./../helpers/cars')
router.get('/', async (req, res, next) => {
    const cars = await db.fetchCars();
    res.status(200).json({
        message: 'Fetch successful',
        cars: cars
    })
})

module.exports = router;