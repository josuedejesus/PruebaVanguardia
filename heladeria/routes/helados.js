const express = require('express')
const router = express.Router();

const heladoController = require('../controllers/helado');

router.get('/get-helados', heladoController.getHelados);
router.post('/create-helado', heladoController.createHelado);
router.put('/update-helado', heladoController.updateHelado);
router.delete('/delete-helado', heladoController.deleteHelado);

module.exports = router;