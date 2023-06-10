// code goes here
const router = require('express').Router();
const { User } = require('../models');

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/apiRoutes', apiRoutes);
router.use('/htmlRoutes', htmlRoutes);

module.exports = router;