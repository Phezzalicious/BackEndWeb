const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlPizza = require('../controllers/pizzas');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);

router.get('/pizzas', ctrlPizza.homeList);
router.get('/pizzas/info', ctrlPizza.locationInfo);

module.exports = router;
