const express = require('express');

const router = express.Router();

const { studentController } = require('../controllers');

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);

module.exports = router;
