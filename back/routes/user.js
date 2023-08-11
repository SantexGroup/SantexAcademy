const userController = require('../controllers/userControllers');

const Express = require('express');

const router = Express.Router();

router.get('/all', userController.getAll);

module.exports = router;
