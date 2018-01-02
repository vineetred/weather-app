const request = require('request');
var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/8695e0d4e8cedd1d8a537b56311a9f83/${lat},${lng}?units=si`,
        json: true,
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
            })
        }
        else {
            callback("Unable to fetch weather.")
        }
        
    })
    
}

module.exports = {
    getWeather,
}