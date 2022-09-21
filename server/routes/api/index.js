var express = require('express');
var router = express.Router();


router.use('/users', require('../../domains/user'))
router.use('/email-verification', require('../../domains/user'))
router.use('/password', require('../../domains/forgotPassword'))

module.exports = router;
