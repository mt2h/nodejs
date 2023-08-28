const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5d6f3e9cadeab1e30ee65c20129c32f8&query=New%20York&units=f'

request({url: url, json: true}, (error, response) => {
    //console.log(response)
    //const data = JSON.parse(response.body) //is not necesary when we used json: true
    //console.log(data)
    //console.log(data.current)
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' dregress out.')
    })
