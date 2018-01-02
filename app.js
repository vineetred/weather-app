const request = require('request');
const yargs = require('yargs');


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
//Encoding the address that yargs takes in through the terminal
var address = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`, //Template strings to inject address
    json: true,
}, (error, response, body) => {
    if(error){
        console.log("Error");
    }
    else if(body.status === 'ZERO_RESULTS'){
        console.log("Unable to find the given address");
    }
    else if(body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    }
   

}); 