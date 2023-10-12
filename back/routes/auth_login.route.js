const { Router } = require('express');
const authLoginValidator = require('../validations/auth_login.validation');
const authLoginController = require('../controllers/auth_login.controller');

const userRouter = Router();

userRouter.post('/login', authLoginController);

module.exports = userRouter;
