const express = require("express");
const userRouter = express.Router();
const upload = require("../config/multerConfig");

const {
  userController,
  usuarioEnVoluntariadoController,
  productController,
} = require("../controllers");

const {
  verifyToken,
  isAdmin,
  isUser,
} = require("../middleware/authMiddleware");


userRouter.get('/', productController.getAllProducts);
userRouter.get('/:id', verifyToken, isAdmin, productController.getProduct);


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


module.exports = userRouter;
