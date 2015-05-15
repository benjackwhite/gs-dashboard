'use strict';

var express = require('express');
var controller = require('./stats.controller');
var router = express.Router();



router.get('/', controller.index);
router.get('/temperature', controller.temperature);
router.get('/plants', controller.plants);
router.get('/weather', controller.weather);
router.get('/fridge', controller.fridge);
router.get('/twitter', controller.twitter);

module.exports = router;