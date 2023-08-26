const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.route('/')
    .get(courseController.getCourses)
    .post(courseController.createCourse);

router.route('/:id')
    .get(courseController.getCourse)
    .put(courseController.updateCourse)
    .delete(courseController.deleteCourse);

module.exports = router;