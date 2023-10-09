const express = require('express');

const router = express.Router();
const profileController = require('../controllers/profile.controller');

router.get('/:id', profileController.getProfileById);
router.delete('/delete/:id', profileController.profileDelete);
router.get('/todos/:id', profileController.getProfilesByUserIdController);
router.post('/create', profileController.profileCreate);

/* Tablas intermedioas */
router.post('/relation/experience', profileController.experienceRelation);
router.post('/relation/reference', profileController.referenceRelation);
router.post('/relation/formation', profileController.formationRelation);
router.post('/relation/optional', profileController.optionalRelation);
router.post('/relation/skill', profileController.skillRelation);
router.post('/relation/language', profileController.languageRelation);

module.exports = router;
