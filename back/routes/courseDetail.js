const express = require('express');

const router = express.Router();
const { courseDetailController } = require('../controllers');
const { createCourseDetail, updateCourseDetail, checkValidationResult } = require('../middleware/validation.middleware');
// Obtener todos los cursos
router.get('/', courseDetailController.getAllCoursesDetails);

// Obtener todos los cdetalles del curso segun id
router.get('/:id', courseDetailController.getCourseDetailsById);

// Crear un nuevo curso
router.post('/', createCourseDetail, checkValidationResult, courseDetailController.createCourseDetail);

// Actualizar detalles de un curso existente
router.put('/:id', updateCourseDetail, checkValidationResult, courseDetailController.updateCourseDetail);

// Eliminar detalles de un curso existente
router.delete('/:id', courseDetailController.deleteCourseDetail);

module.exports = router;
