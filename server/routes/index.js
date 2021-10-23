var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About me page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

// projects page
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

// services page
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

// contact me page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
