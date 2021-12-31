const fs = require('fs');
const path = require('path');

function newNote(note, noteStorage) {
    const Note = note;
    noteStorage.push(Note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteStorage}, null, 2)
    );

    return newNote;
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