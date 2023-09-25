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

userRouter.get("/me/profile", verifyToken, isUser, userController.getMyUser);
userRouter.put("/me/update", verifyToken, isUser, userController.updateMyUser);
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
  "/postulate/:id",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.join
);

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
