const yargs = require('yargs')
const notes = require('./notes.js')

/*console.log(process.argv)

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note!')
    }
else if (command === 'remove'){
    console.log('Removing note!')
    }*/

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log('Adding a new note!', argv)
        //console.log('Title:', argv.title)
        //console.log('Body:', argv.body)
        notes.addNote(argv.title, argv.body)
        }
    })

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
            }
        },
    handler: function(argv) {
        notes.removeNote(argv.title)
        //console.log('Removing a new note!')
        }
    })

yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function() {
        console.log('List out all note')
        }
    })

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading a new note!')
        }
    })

//console.log(yargs.argv)
yargs.parse()