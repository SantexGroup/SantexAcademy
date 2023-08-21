const express = require('express');

const userRouter = express.Router();

const { userController } = require('../controllers');

userRouter.get('/', userController.getUsersByCriteria);

userRouter.post('/create', userController.createUser);
userRouter.put('/update/:id', userController.updateUserById);
userRouter.delete('/delete/:id', userController.deleteUserById);


module.exports =userRouter;