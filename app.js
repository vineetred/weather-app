const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Enter the address',
            string: true,
        }
    })
    .help()
    .argv;
//Geocode
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`The weather for address: ${results.address}`);

        weather.getWeather(results.latitude, results.longitude, (errorWeatherMessage, weatherResults) => {
            if (errorWeatherMessage) {
                console.log(errorWeatherMessage);
            } else {
                console.log(`The temperature is ${weatherResults.temperature} celsius and it feels like ${weatherResults.apparentTemperature} celsius`);
            }
        });
    }
})