var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IBM', content: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', content: 'home' });
});

/*Get about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', content: 'about' });
});

/*Get contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', content: 'contact' });
});

/*Get project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', content: 'project' });
});

/*Get service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service', content: 'service' });
});

module.exports = router;