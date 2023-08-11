const express = require("express");
const router = express.Router();
const surveyController = require("../controllers/surveyController");

router.post("/", surveyController.createSurvey);

router.get("/:email", surveyController.getSurveysByEmail);

module.exports = router;
