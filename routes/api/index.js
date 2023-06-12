const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/userRoutes', userRoutes);
router.use('/blogRoutes', blogRoutes);

module.exports = router;