const { Router } = require('express');
const authLoginValidator = require('../validations/auth_login.validation');
const authLoginController = require('../controllers/auth_login.controller');
// const roleValidator = require('../validations/role.validation');

const userRouter = Router();

userRouter.post(
  '/login',
  // roleValidator
  authLoginValidator,
  authLoginController,
);

module.exports = userRouter;
