const express = require('express');

const router = express.Router();
const { CourseController } = require('../controllers');

// Obtener todos los cursos
router.get('/', CourseController.getAllCourses);

// Obtener un curso por su ID
router.get('/:id', CourseController.getCourseById);

// Crear un nuevo curso
router.post('/', CourseController.createCourse);

// Actualizar un curso existente
router.put('/:id', CourseController.updateCourse);

// Eliminar un curso por su ID
router.delete('/:id', CourseController.deleteCourse);

module.exports = router;
