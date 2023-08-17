const express = require('express');

const router = express.Router();
const { TeacherController } = require('../controllers');

router.get('/', TeacherController.getAllTeachers);
router.get('/:id', TeacherController.getTeachersById);
router.post('/', TeacherController.createTeacher);
router.put('/:id', TeacherController.updateTeacher);
router.delete('/:id', TeacherController.deleteTeacher);

module.exports = router;
