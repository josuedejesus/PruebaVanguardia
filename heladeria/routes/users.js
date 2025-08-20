var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');


router.get('/get-hola', userController.getHola);

router.post('/post-hola', userController.postHola);

router.put('/put-hola', userController.putHola);

router.delete('/delete-hola', userController.deleteHola);

module.exports = router;
