const express = require("express");
const userRouter = express.Router();

const {
  userController,
  usuarioEnVoluntariadoController,
} = require("../controllers");

const {
  verifyToken,
  isAdmin,
  isUser,
} = require("../middleware/authMiddleware");

userRouter.get("/", verifyToken, isAdmin, userController.getUsersByCriteria);

userRouter.put(
  "/:id",
  createAndUpdateUserValidation,
  verifyToken,
  isUser,
  async (req, res) => {
    // Comprueba las validaciones antes de ejecutar el controlador de actualización de usuarios
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Si las validaciones pasan y los middleware también, llama al controlador correspondiente para actualizar un usuario
    userController.updateUserById(req, res);
  }
);

userRouter.get(
  "/me/profile",
  verifyToken,
  isUser,
  userController.getUserProfile
);

// Ruta para que un usuario elimine su propio perfil
userRouter.delete(
  "/me/profile",
  verifyToken,
  isUser,
  userController.deleteMyUser
);

// Ruta para que un administrador elimine el perfil de cualquier usuario
userRouter.delete("/:id", verifyToken, isAdmin, userController.deleteUser);

// Ruta para que un usuario pueda postularse a un voluntario

userRouter.post(
  "/postulate",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.join
);

userRouter.get("/postulate", verifyToken, isUser, usuarioEnVoluntariadoController.getJoins)


userRouter.put("/postulate/update", verifyToken, isUser, usuarioEnVoluntariadoController.updateStatusById)

userRouter.delete("/postulate/delete", verifyToken, isUser, usuarioEnVoluntariadoController.deleteJoinById)




module.exports = userRouter;
