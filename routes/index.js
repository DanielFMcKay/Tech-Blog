// code goes here
// const { User } = require('../models');
const router = require('express').Router();

const apiRoutes = require('./api');
// const htmlRoutes = require('./htmlRoutes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/htmlRoutes', htmlRoutes);

module.exports = router;