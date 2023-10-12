const express = require('express');

const router = express.Router();
const { RegisterController } = require('../controllers');

router.get('/:CourseId', RegisterController.getRegisterById);

module.exports = router;
