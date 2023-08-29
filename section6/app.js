const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5d6f3e9cadeab1e30ee65c20129c32f8&query=New%20York&units=f'

request({url: url, json: true}, (error, response) => {
    //console.log(response)
    //const data = JSON.parse(response.body) //is not necesary when we used json: true
    //console.log(data)
    //console.log(data.current)
    //console.log(response.body.current)
    if(error){
        console.log('Unable to connect to weather service!')
        }
    else if(response.body.error){
        console.log('Unable to find location')
        }
    else{
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' dregress out.')
        }
    })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'


request({ url: geocodeURL, json: true }, (error, response) => {
    if (error){
        console.log('Unable to connect to location services!')
        }
    else if (!response.body.features){
        console.log('Unable to find location. Try another search.')
        }
    else{
        console.log('No geolocation data found in the response!')
        console.log(response.body)
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
        }
    })