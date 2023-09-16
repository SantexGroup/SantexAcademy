const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken, isAdmin, isUser }  = require('../middleware/authMiddleware');


userRouter.get('/me/profile/:id', verifyToken, isUser, userController.getUserProfile); 
userRouter.get('/', verifyToken, isAdmin, userController.getUsersByCriteria); 

userRouter.put('/:id', verifyToken, isUser, userController.updateUserById); 

// Ruta para que un usuario elimine su propio perfil
userRouter.delete('/me/profile/:id', verifyToken, isUser, userController.deleteUserById);

// Ruta para que un administrador elimine el perfil de cualquier usuario
userRouter.delete('/:id', verifyToken, isAdmin, userController.deleteUserById);


module.exports = userRouter;
