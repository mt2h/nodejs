const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv)
const address = process.argv[2]

/*if(!address){
    console.log('Please provide an anddress')
    }
else{
    geocode(address, (error, data) => {
        //console.log('Error', error)
        //console.log('Data', data)
        if(error){
            return console.log(error)
            }
        forecast(data.latitude, data.longitude, (error, dataForecast) => {
            if(error){
                return console.log(error)
                }
            console.log(data.location)
            //console.log('Error', error)
            console.log('Data', dataForecast)
            })
        })
    }*/

if(!address){
    console.log('Please provide an anddress')
    }
else{
    geocode(address, (error, {latitude, longitude, location} = {}) => { //= {} default null object value
        if(error){
            return console.log(error)
            }
        forecast(latitude, longitude, (error, dataForecast) => {
            if(error){
                return console.log(error)
                }
            console.log(location)
            console.log('Data', dataForecast)
            })
        })
    }