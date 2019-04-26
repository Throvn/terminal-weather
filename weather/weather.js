const request = require('request')
const apiKey = 'YOURKEY'
const getWeather = (lat, lng, callback) => {
    request(
      {
        url: 'https://api.darksky.net/forecast/'+apiKey+'/'+lat+','+lng,
        json: true,
      },
      (error, response, body) => {
        if (error) {
          callback('Server not found')
        } else if (!error && response.statusCode === 200) {
          callback(undefined, {
            lng: body.longitude,
            lat: body.latitude,
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          })
        }
      }
    )
  }
  module.exports = {getWeather} 