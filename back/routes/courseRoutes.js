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

router.get('/:id/user', courseController.getUsers);

router.put('/:courseId/user/:userId', courseController.addUser);

module.exports = router;