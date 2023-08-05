const express = require('express');
// const { body } = require('express-validator');
const router = express.Router();
const { userController } = require('../controllers');

router.get('/:idUser', userController.getUser);

module.exports = router;
