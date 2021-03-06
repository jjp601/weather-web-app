const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/2f636e8911e2dfb9b53609c72d3a5810/${lat},${long}`

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The high for today is ${body.daily.data[0].temperatureHigh} and the low is ${body.daily.data[0].temperatureLow}.`)
        }
    })
}

module.exports = forecast