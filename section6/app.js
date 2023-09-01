const geocode = require('./utils/geocode')

geocode('New York England', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    })