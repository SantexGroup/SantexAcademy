const express = require("express");
const userRouter = express.Router();
const upload = require("../config/multerConfig");

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
userRouter.put(
  "/me/updatePhoto",
  upload.single("file"),
  verifyToken,
  isUser,
  userController.updatePhotoMyProfile
);
userRouter.delete(
  "/me/profile",
  verifyToken,
  isUser,
  userController.deleteMyUser
);
userRouter.post(
  "/postulate/:idOrg/:idVol",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.join
);

userRouter.get(
  "/postulate",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.getJoins
);

userRouter.put(
  "/postulate/update",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.updateStatusById
);

userRouter.delete(
  "/postulate/delete",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.deleteJoinById
);

userRouter.delete("/:id", verifyToken, isAdmin, userController.deleteUser);

module.exports = userRouter;
