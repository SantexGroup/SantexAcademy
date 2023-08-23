const express = require('express');

const router = express.Router();
router.use(express.json());
const surveyController = require('../controllers/surveyController');
const isAdminOrSurveyorMiddleware = require('../middleware/isAdminOrSurveyorMiddleware');
const isAdminMiddleware = require('../middleware/isAdminMiddleware');

router.post('/', isAdminOrSurveyorMiddleware, surveyController.createSurvey);
router.get('/email/:email', isAdminOrSurveyorMiddleware, surveyController.getSurveysByEmail);
router.get('/', isAdminOrSurveyorMiddleware, surveyController.getAllSurveys);
router.get('/:id', isAdminOrSurveyorMiddleware, surveyController.getSurveyById);
router.patch('/:id', isAdminOrSurveyorMiddleware, surveyController.updateSurvey);
router.delete('/:id', isAdminMiddleware, surveyController.deleteSurvey);
router.patch('/:id/restore', isAdminMiddleware, surveyController.restoreSurvey);
router.get('/surveyor/:surveyorId', isAdminOrSurveyorMiddleware, surveyController.getSurveysBySurveyorAndDates);
module.exports = router;
