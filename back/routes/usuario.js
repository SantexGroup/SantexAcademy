const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');

userRouter.post('/create', userController.createUser);
userRouter.get('/', userController.getUsersByCriteria);
userRouter.put('/update/:id', userController.updateUserById);
userRouter.delete('/delete/:id', userController.deleteUserById);

module.exports = userRouter;
