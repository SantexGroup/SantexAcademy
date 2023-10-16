const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { CategoryController } = require('../controllers');

router.get('/', CategoryController.getCategories);
router.get('/:CategoryId', CategoryController.getCategoryById);
router.get('/courses/:CategoryName', CategoryController.getCategoriesCourse);
router.post('/', body('name').isString(), CategoryController.createCategory);

router.put(
  '/:CategoryId',
  body('name').isString(),
  CategoryController.updateCategory,
);

router.delete('/:CategoryId', CategoryController.deleteCategory);

module.exports = router;
