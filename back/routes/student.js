const express = require('express');

const router = express.Router();

const { studentController } = require('../controllers');

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
// Assing cohort to student
router.post('/:id/cohort', studentController.assignCohortToStudent);

module.exports = router;
