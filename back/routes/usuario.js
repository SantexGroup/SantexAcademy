const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken }  = require('../middleware/authMiddleware');


userRouter.get('/me/profile/:id', verifyToken, userController.getUserProfile); 
userRouter.get('/', userController.getUsersByCriteria); // TODO!! proteger esta ruta con el middleware ADMIN

userRouter.put('/:id', verifyToken, userController.updateUserById); 

userRouter.delete('/:id',verifyToken, userController.deleteUserById); //todo! FALTA el middleware ADMIN

module.exports = userRouter;
