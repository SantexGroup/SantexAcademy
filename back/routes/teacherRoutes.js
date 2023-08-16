const express = require('express');

const router = express.Router();
const { TeacherController } = require('../controllers');

router.get('/', TeacherController.getAllTeachers);
router.get('/:id', TeacherController.getTeachersById);
router.post('/', TeacherController.createTeacher);
router.put('/:id', TeacherController.updateTeacher);
// Faltan aquí las demás rutas relacionadas con Teachers

module.exports = router;
