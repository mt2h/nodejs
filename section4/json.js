const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
    }

const bookJSON  = JSON.stringify(book)
console.log(bookJSON)

const parseData = JSON.parse(bookJSON)
console.log(parseData)
console.log(parseData.author)

fs.writeFileSync('1-json.json', bookJSON )

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)

const buffer = fs.readFileSync('2-json.json').toString()
const user = JSON.parse(buffer)

user.name = 'Gunther'
user.age = 54

const userJSON  = JSON.stringify(user)
fs.writeFileSync('2-json.json', userJSON )

console.log(user)

