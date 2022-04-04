const express = require('express');
const {homePage, sendEmail, projectsPage} = require('../controllers/pageController');
const router = express.Router();

router.get('/', homePage);

router.get('/projects', projectsPage);

router.post('/sendEmail', sendEmail);

module.exports = {
    routes: router
}
