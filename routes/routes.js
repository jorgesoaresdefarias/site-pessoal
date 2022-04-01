const express = require('express');
const {homePage} = require('../controllers/pageController');
const router = express.Router();

router.get('/', homePage);

module.exports = {
    routes: router
}
