const express = require('express');

const router = express.Router();
const { TeacherController } = require('../controllers');

router.get('/', TeacherController.getAllTeachers);
// Faltan aquí las demás rutas relacionadas con Teachers

module.exports = router;
