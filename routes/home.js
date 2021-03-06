var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/')
  }
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {user: req.user });

});

module.exports = router;
