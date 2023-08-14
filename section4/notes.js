const fs = require('fs')

const getNotes = function (){
    return 'Your notes...'
    }

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function() {
        return notes.title === title
        })

    if(duplicateNotes === 0) {
        notes.push({
            title: title,
            body: body
            })
    
        saveNotes(notes)
        console.log('New note added!')
        }
    else{
        console.log('Note title taken!')
        }

    //console.log(notes)
    }

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    }

const loadNotes = function(){
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
    getNotes: getNotes,
    addNote: addNote
    }