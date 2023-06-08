// code goes here

const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/apiRoutes', apiRoutes);
router.use('/html', htmlRoutes);

module.exports = router;