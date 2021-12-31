const noteTaker = require('../apiRoutes/notetaker');
const router = require('express').Router();

router.use(noteTaker);
module.exports = router;