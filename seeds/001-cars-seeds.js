
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate();
  await knex('cars').insert([
    {
      "VIN" : "LC29D34157KBAF6E8",
      "make" : "BMW",
      "model": "BMW 326",
      "mileage": 90
    },
    {
      "VIN" : "BKC8L7312A4DE96F5",
      "make" : "Audi",
      "model": "A1",
      "mileage": 9090239
    },
    {
      "VIN" : "CE6A145BFK98LD732",
      "make" : "Bugatti",
      "model": " Type 37",
      "mileage": 100
    },
    {
      "VIN" : "3DKF89BLA4E716C25",
      "make" : "Chevrolet",
      "model": " Caprice",
      "mileage": 2009
    },
  ]);
    
};
