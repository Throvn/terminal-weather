const request = require('request');
var geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address)
    return new Promise((resolve, reject) => {
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.')
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address')
            }else if (body.status === 'OVER_QUERY_LIMIT') {
                reject('Over Query Limit')
            } else if (body.status === 'REQUEST_DENIED') {
                console.log('You must have an API KEY')
            } else if (body.status === 'OK') {
                resolve({
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat,
                    address: body.results[0].formatted_address
                })
            }
        })
    })
}
module.exports = {geocodeAddress}