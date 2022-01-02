const fs = require('fs');
const path = require('path');
const noteList = require('../db/db.json')

function newNote(note) {
    note.id = Math.floor(Math.random() * 100)
    noteList.push(note)
  
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteList)
    );

    return note;
};
function noteValidation(note) {
    if(!note.title || typeof note.title !== "string") {
        return false;
    }
    if(!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
};
module.exports = {newNote, noteValidation}