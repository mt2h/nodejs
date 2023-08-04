const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created with Node.js!')

//const name = require('./utils.js')
//console.log(name)

const add = require('./utils.js')
console.log(add(5, 5))

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)