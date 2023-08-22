const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.post('/login', userController.login);
router.post('/user-register', userController.createUser);

module.exports = router;
