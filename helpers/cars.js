const db = require('./../data/db');

function fetchCars(){
    return db('cars')
}
module.exports = {
    fetchCars
}