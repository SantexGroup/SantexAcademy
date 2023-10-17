const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

const { checkValidationResult } = require('../middleware/validation.middleware');
const courseCreateValidations = require('../middleware/course.validation.mw')

router.get('/search', courseController.searchCourses);

router.route('/')
    .get(courseController.getCourses)
    .post(courseCreateValidations, checkValidationResult, courseController.createCourse);

router.route('/:id')
    .get(courseController.getCourse)
    .put(courseController.updateCourse)
    .delete(courseController.deleteCourse);

router.get('/:id/user', courseController.getUsers);

router.route('/:courseId/user/:userId')
    .put(courseController.addUser)
    .delete(courseController.removeUser);

module.exports = router;

