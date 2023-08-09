const express = require('express');

const router = express.Router();
const profileController = require('../controllers/profile.controller');
const profileFormationsController = require('../controllers/profile_formation.controller');

router.get('/:id', profileController.getProfile);
router.get('/:id/formations', profileFormationsController.getProfileFormations);

module.exports = router;
