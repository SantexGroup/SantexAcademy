const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');

userRouter.post('/:role', userController.createUser);
userRouter.get('/', userController.getUsersByCriteria);
userRouter.put('/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;
