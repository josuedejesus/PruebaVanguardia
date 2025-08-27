const express = require('express')
const router = express.Router();

const weatherController = require('../controllers/getWeather');

router.get('/get-weather', weatherController.getWeather);

module.exports = router;