const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken }  = require('../middleware/authMiddleware');

userRouter.post('/:role', userController.createUser);
userRouter.get('/', userController.getUsersByCriteria);
userRouter.put('/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;
