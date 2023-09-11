const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath)) 

/*app.get('', (req, res) => {
    //res.send('Hello express!')
    })*/

/*app.get('/help', (req, res) => {
    //res.send('Help page')
    res.send({
        name: 'Andrew',
        age: 27
        })
    })*/

/*app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
    })*/

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
        })
    })

app.listen(3000, () => {
    //console.log(__dirname)
    //console.log(path.join(__dirname))
    //console.log(path.join(__dirname, '../../'))
    //console.log(path.join(__dirname, '../public'))
    //console.log(__filename)
    console.log('Server is up on port 3000.')
    })