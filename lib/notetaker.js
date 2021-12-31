const fs = require('fs');
const path = require('path');

function newNote(note, noteStorage) {
    const note = note;
    noteStorage.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteStorage}, null, 2)
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