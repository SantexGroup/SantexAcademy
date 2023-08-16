const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.post('/user-register', userController.createUser);
router.post('/login', userController.login);

module.exports = router;
