const express = require('express')
const router = express.Router();

const heladoController = require('../controllers/helado');

router.get('/get-helado', heladoController.getHelado);

module.exports = router;