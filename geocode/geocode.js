const request = require('request');
var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`, //Template strings to inject address
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback("Error");
        } else if (body.status === "ZERO_RESULTS") {
            callback("Unable to find the given address");
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                longitude: body.results[0].geometry.location.lng,
                latitude: body.results[0].geometry.location.lat,
            })
        } else {
            callback("API timed out");
        }

    });
}


module.exports = {
    geocodeAddress,

}