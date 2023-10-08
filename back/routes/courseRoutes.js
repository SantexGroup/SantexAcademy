const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.get('/search', courseController.searchCourses);

router.route('/')
    .get(courseController.getCourses)
    .post(courseController.createCourse);

router.route('/:id')
    .get(courseController.getCourse)
    .put(courseController.updateCourse)
    .delete(courseController.deleteCourse);

router.get('/:id/user', courseController.getUsers);

router.route('/:courseId/user/:userId')
    .put(courseController.addUser)
    .delete(courseController.removeUser);

module.exports = router;

