var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get-hola', function(req, res, next) {
  res.send('Hola');
})

router.post('/post-hola', function(req, res, next) {
  res.send('POST hola');
})

router.put('/put-hola', function(req, res, next) {
  res.send('PUT hola');
})

router.delete('/delete-hola', function(req, res, next) {
  res.send('DELETE hola');
})

module.exports = router;
