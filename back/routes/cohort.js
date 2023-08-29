const express = require('express');

const router = express.Router();
const { cohortController } = require('../controllers');

router.post('/', cohortController.enrollStudentInCourse);

module.exports = router;
