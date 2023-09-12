const express = require('express');
const { body } = require('express-validator');
const { UserController } = require('../controllers');

const router = express.Router();

router.get('/:userId', UserController.getUserById);

router.get('/', UserController.getUsers);

router.post(
  '/',
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('password').isString(),
  UserController.createUser,
);
router.put(
  '/:userId',
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('phone').isString(),
  body('password').isString(),
  UserController.updateUser,
);

router.delete('/:userId', UserController.deleteUser);

module.exports = router;
