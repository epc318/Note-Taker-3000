const { noteValidation, newNote } = require("../../lib/notetaker");
const note = require('../../db/db.json')
const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log(note);
    let input = note;
    res.json(input); 
});
router.post('/notes', (req, res) => {
    console.log(req.body);  
    if(!noteValidation(req.body)) {
      res.status(400).send("Your Note is foramtted incorrectly, please try again!");
    } else {
      const notes = newNote(req.body, note);
      res.json(notes);
    }
});
module.exports = router;