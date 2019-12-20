const db = require('./../data/db');

function fetchCars(){
    return db('cars')
}
function fetchCarAt(id){
    return db('cars').where({id: id})
}
function postCar(car){
    return db('cars').insert(car);
}
function deleteCar(id){
    return db('cars').where({id: id}).del();
}
function updateCar(id, car){
    return db('cars').where({id: id}).update(car)
}
module.exports = {
    fetchCars,
    fetchCarAt,
    postCar,
    deleteCar,
    updateCar
}