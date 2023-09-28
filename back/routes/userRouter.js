const express = require('express');
const { body } = require('express-validator');
const { UserController } = require('../controllers');

const router = express.Router();
router.get('/:userId', UserController.getUserById);

router.get('/', UserController.getUsers);
router.get('/email/:email', UserController.getUserByEmail);
router.post(
  '/',
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('password').isString(),
  UserController.createUser,
);
router.delete(
  '/removeinscription/:idCourse/:idUser',
  UserController.removeCourseRegistration,
);
router.post(
  '/inscription',
  body('idCourse').isInt(),
  body('idUser').isInt(),
  UserController.inscription,
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
router.patch('/:userId',
  body('password').isString(),
  UserController.updatePassword);

router.delete('/:userId', UserController.deleteUser);

module.exports = router;
