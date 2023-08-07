const express = require('express');

const router = express.Router();
const profileController = require('../controllers/profile.controller');

router.get('/:id', profileController.getProfile);
router.get('/todos/:id', profileController.getProfilesByUserIdController);

module.exports = router;
