const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken , isAdmin, isAdminOrSelf }  = require('../middleware/authMiddleware');


userRouter.get('/me/profile/:id', verifyToken, userController.getUserProfile); 
userRouter.get('/', verifyToken, isAdmin, userController.getUsersByCriteria); 

userRouter.put('/:id', verifyToken, userController.updateUserById); 

userRouter.delete('/:id',verifyToken,isAdminOrSelf, userController.deleteUserById); 

module.exports = userRouter;
