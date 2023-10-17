const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.route('/')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory);

router.route('/:id')
    .get(categoryController.getCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

router.route('/:categoryId/course/:courseId')
    .put(categoryController.addCourse)
    .delete(categoryController.removeCourse);

module.exports = router;