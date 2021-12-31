const notetaker = require('../apiRoutes/notetaker');
const router = require('express').Router();

router.use(notetaker);
module.exports = router;