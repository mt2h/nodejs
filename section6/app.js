const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5d6f3e9cadeab1e30ee65c20129c32f8&query=New%20York'

request({url: url}, (error, response) => {
    //console.log(response)
    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.current)
    })
