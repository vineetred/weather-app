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

        weather.getWeather(results.latitude,results.longitude,(errorWeatherMessage, weatherResults)=> {
            if(errorWeatherMessage) {
                console.log(errorWeatherMessage);
            }
            else {
                console.log(`Temperature: ${weatherResults.temperature} celsius`);
            }
        });
    }
})

// weather.getWeather(17.385044,78.486671,(errorMessage, results)=> {
//     if(errorMessage) {
//         console.log(errorMessage);
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });