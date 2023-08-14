const express = require('express');

const router = express.Router();
const { TeacherController } = require('../controllers');

router.get('/', TeacherController.getAllTeachers);
router.get('/:id', TeacherController.getTeachersById);
// Faltan aquí las demás rutas relacionadas con Teachers

module.exports = router;
