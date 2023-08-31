const express = require('express');

const router = express.Router();
const { courseController } = require('../controllers');

// Obtener todos los cursos
router.get('/', courseController.getAllCourses);

// Obtener un curso por su ID
router.get('/:id', courseController.getCourseById);

// Crear un nuevo curso
router.post('/', courseController.createCourse);

// Actualizar un curso existente
router.put('/:id', courseController.updateCourse);

// Eliminar un curso por su ID
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
