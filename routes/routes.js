const express = require('express');
const {homePage, sendEmail, goToExperiences, goToWorks} = require('../controllers/pageController');
const router = express.Router();

router.get('/', homePage);


router.post('/sendEmail', sendEmail);

router.get('/goToExperiences', goToExperiences);

router.get('/goToWorks', goToWorks);

module.exports = {
    routes: router
}
