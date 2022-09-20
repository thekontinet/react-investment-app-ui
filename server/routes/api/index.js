var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', require('../../domains/user'))
router.use('/email-verification', require('../../domains/user'))

module.exports = router;
