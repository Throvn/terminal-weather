const yargs = require("yargs")
const geocode = require("./geocode/geocode.js")
const weather = require("./weather/weather.js")

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);


    weather.getWeather(results.longitude, results.latitude, (error, weatherResults) => {
      if(error){
        console.log(error);
        
      } else if(weatherResults){
        console.log(JSON.stringify(weatherResults, undefined, 4))
      }
    })
  }
})