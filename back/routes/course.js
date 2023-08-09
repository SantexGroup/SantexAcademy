// eslint-disable-next-line import/newline-after-import
const express = require('express');
const { courseController } = require('../controllers');

const router = express.Router();

router.get('/all', courseController.getAllCourses);

module.exports = router;
