const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

fs.writeFileSync('notes.txt', 'This file was created with Node.js!')

//const name = require('./utils.js')
//console.log(name)

const add = require('./utils.js')
console.log(add(5, 5))

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('mt2h@hotmail.com'))
console.log(validator.isURL('https://mead.io'))

console.log(chalk.green('Success!'))
console.log(chalk.green.bold('Success!'))