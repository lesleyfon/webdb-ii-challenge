require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const app = express();
const carsRouter = require('./expressRouters/cars')
app.use(bodyParser.json())

app.use('/api/cars', carsRouter);
app.get('/',(req, res) => {
    res.status(200).send(`<h2 style='text-align:center'>Welcome to Cars backend</h2>`)
})
app.listen(PORT, ()=>{
    console.log(`Serrver listening http://${HOST}:${PORT}`)
})