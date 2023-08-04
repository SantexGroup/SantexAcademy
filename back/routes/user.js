const express = require('express');
const ExpressValidator = require('express-validator');

const router = express.Router();

const { userControllers } = require('../controllers');
const { checkValidationResult } = require('../middleware/validation.middleware');

router.get('/user', [
  ExpressValidator.query('email').notEmpty().withMessage('El campo "email" es obligatorio'),
  checkValidationResult], userControllers.createUser);

module.exports = router;
