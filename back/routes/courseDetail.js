const express = require('express');

const router = express.Router();
const { courseDetailController } = require('../controllers');

// Obtener todos los cursos
router.get('/', courseDetailController.getAllCoursesDetails);
router.post('/', courseDetailController.createCourseDetail);

module.exports = router;
