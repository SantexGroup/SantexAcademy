const express = require('express');

const userRouter = express.Router();
const { userController } = require('../controllers');
const  { verifyToken, isAdmin, isUser }  = require('../middleware/authMiddleware');
const { createAndUpdateUserValidation } = require('../middleware/validations.UserEntity');


  
userRouter.get('/me/profile/:id', verifyToken, isUser, userController.getUserProfile); 
userRouter.get('/', verifyToken, isAdmin, userController.getUsersByCriteria); 



userRouter.put('/:id', createAndUpdateUserValidation, verifyToken, isUser, async (req, res) => {
  // Comprueba las validaciones antes de ejecutar el controlador de actualización de usuarios
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Si las validaciones pasan y los middleware también, llama al controlador correspondiente para actualizar un usuario
  userController.updateUserById(req, res);
});



// Ruta para que un usuario elimine su propio perfil
userRouter.delete('/me/profile/:id', verifyToken, isUser, userController.deleteUserById);

// Ruta para que un administrador elimine el perfil de cualquier usuario
userRouter.delete('/:id', verifyToken, isAdmin, userController.deleteUserById);


module.exports = userRouter;
