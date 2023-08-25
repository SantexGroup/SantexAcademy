const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');

userRouter.post('/register', userController.createUser);
userRouter.post('/login', userController.loginUser);
userRouter.get('/', userController.getUsersByCriteria);
userRouter.put('/update/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;
