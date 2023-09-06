const request = require('request')

/*const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5d6f3e9cadeab1e30ee65c20129c32f8&query='+ address //+'&units=f'

    request({url: url, json: true}, (error, response) => {
        if(error){
           callback('Unable to connect to location services!', undefined)
            }
        else if(response.body.current === undefined){
            callback('Unable to find location. Try another search!', undefined)
            }
        else{
            callback(undefined, {
                latitude: response.body.location.lat,
                longitude: response.body.location.lon,
                location: response.body.location.name
                })
            }
        })
    }*/

const geocode = (address, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=5d6f3e9cadeab1e30ee65c20129c32f8&query='+ address //+'&units=f'
    
        request({url, json: true}, (error, {body} = {}) => {
            if(error){
               callback('Unable to connect to location services!', undefined)
                }
            else if(body.current === undefined){
                callback('Unable to find location. Try another search!', undefined)
                }
            else{
                callback(undefined, {
                    latitude: body.location.lat,
                    longitude: body.location.lon,
                    location: body.location.name
                    })
                }
            })
        }
    

module.exports = geocode