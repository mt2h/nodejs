const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    //debugger

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
            })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
        }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
        }
    }

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > noteToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        }
    else{
        console.log(chalk.red.inverse('Note note found!'))
        }

    saveNotes(noteToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    }

const loadNotes = () => {
    try {
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
    
        return JSON.parse(dataJSON)
        } 
    catch(e) {
        return []
        }
    }

module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    removeNote: removeNote,
    readNote: readNote
    }