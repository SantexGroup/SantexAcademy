const express = require('express');
const { validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const isAdminMiddleware = require('../middleware/isAdminMiddleware');
const { validateUserFields, validateLoginRequest } = require('./validators');

const router = express.Router();

router.get('/:id', userController.getUserById);
router.get('/', userController.getUsers);
router.post(
  '/login',
  validateLoginRequest,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userController.login(req, res, next);
  },
);

router.post(
  '/',
  validateUserFields,
  isAdminMiddleware,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Si no hay errores, continúa con el controlador
    userController.createUser(req, res, next);
  },
);

router.put(
  '/:id',
  validateUserFields,
  isAdminMiddleware,
  userController.updateUser,
);

router.put('/:id/restore', userController.restoreUser);

router.delete(
  '/:id',
  isAdminMiddleware,
  userController.deleteUser,
);

module.exports = router;
