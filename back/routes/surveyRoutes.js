const express = require('express');

const router = express.Router();
router.use(express.json());
const surveyController = require('../controllers/surveyController');
const isAdminOrSurveyorMiddleware = require('../middleware/isAdminOrSurveyorMiddleware');

router.post('/', isAdminOrSurveyorMiddleware, surveyController.createSurvey);
router.get('/email/:email', isAdminOrSurveyorMiddleware, surveyController.getSurveysByEmail);
router.get('/', isAdminOrSurveyorMiddleware, surveyController.getAllSurveys);
router.get('/:id', isAdminOrSurveyorMiddleware, surveyController.getSurveyById);
router.patch('/:id', isAdminOrSurveyorMiddleware, surveyController.updateSurvey);
// router.put('/:id', surveyController.updateSurvey);
// router.delete('/:id', surveyController.deleteSurvey);

module.exports = router;
