const Express = require('express');
const categoryController = require('../controllers/category-controller');

const router = Express.Router();

router.get('/get-all', categoryController.getAllCategory);
router.get('/get-by-id', categoryController.getCategoryById);
router.post('/create-category', categoryController.createCategory);
router.put('/edit-category', categoryController.editCategory);
router.delete('/delete-category', categoryController.deleteCategory);

module.exports = router;
