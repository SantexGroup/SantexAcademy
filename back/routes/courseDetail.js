const express = require('express');

const router = express.Router();
const { courseDetailController } = require('../controllers');

// Obtener todos los cursos
router.get('/', courseDetailController.getAllCoursesDetails);

// Crear un nuevo curso
router.post('/', courseDetailController.createCourseDetail);

// Actualizar detalles de un curso existente
router.put('/:id', courseDetailController.updateCourseDetail);

module.exports = router;
