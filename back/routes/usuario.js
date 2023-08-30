const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken }  = require('../middleware/authMiddleware');


userRouter.post('/', userController.createUser);
// todo!! userRouter.post('/login', userController.loginUser); //pasar a un authController
userRouter.get('/profile', verifyToken, userController.getUserProfile);
userRouter.get('/', userController.getUsersByCriteria); //proteger esta ruta con el middleware ADMIN
userRouter.put('/:id', userController.updateUserById); // proteger con verifyToken y chequar que el id sea correspondiente
userRouter.delete('/:id', userController.deleteUserById); //proteger con verifyToken y con el middleware ADMIN

module.exports = userRouter;
