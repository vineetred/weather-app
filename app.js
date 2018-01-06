const request = require('request');
const yargs = require('yargs');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')
var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
//Express middleware for form POST data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 


//My routes



app.get('/', (req, res) => {
    res.render('home.hbs');
})
app.post('/', function(req, res) {
    var textAddress = req.body.name;
    //Geocode
    geocode.geocodeAddress(textAddress, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(`The weather for address: ${results.address}`);
    
            weather.getWeather(results.latitude, results.longitude, (errorWeatherMessage, weatherResults) => {
                if (errorWeatherMessage) {
                    console.log(errorWeatherMessage);
                } else {
                    console.log(`The temperature is ${weatherResults.temperature} celsius and it feels like ${weatherResults.apparentTemperature} celsius`);
                    res.send('The temperature is: ' + weatherResults.temperature);
                    // hbs.registerHelper('weatherTemp', ()=> {
                    //     return weatherResults.temperature;
                    // })
                }
            });
        }
    })
  });





//Server listening
app.listen(port, () => {
    console.log(`Server is up on port: ${port}.`)
});