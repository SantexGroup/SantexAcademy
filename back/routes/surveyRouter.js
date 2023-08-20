const express = require('express');

const router = express.Router();
router.use(express.json());
// const surveyController = require('../controllers/surveyController');

// router.post('/', surveyController.createSurvey);
// router.get('/email/:email', surveyController.getSurveysByEmail);
// router.get('/', surveyController.getAllSurveys);
// router.put('/:id/', surveyController.updateSurvey);
// router.patch('/:id/', surveyController.updateSurvey);
// router.get('/id/:id', surveyController.getSurveyById);
// router.delete('/:id', surveyController.deleteSurvey);

module.exports = router;
