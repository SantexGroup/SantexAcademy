const express = require('express');

// const isAuthenticated = require('../middleware/authentication.middleware');
// const isAdmin = require('../middleware/autorization.middleware');

const profileController = require('../controllers/profile.controller');

const router = express.Router();

router.get('/:id', profileController.getProfile);
// router.get('/:id', isAuthenticated, isAdmin, profileController.getProfile);

module.exports = router;
