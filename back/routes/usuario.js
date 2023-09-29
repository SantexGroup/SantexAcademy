const express = require("express");
const userRouter = express.Router();
const upload = require("../config/multerConfig");

const {
  userController,
  usuarioEnVoluntariadoController,
  productController,
  canjeController
} = require("../controllers");

const {
  verifyToken,
  isUser,
} = require("../middleware/authMiddleware");


userRouter.get('/', productController.getAllProducts);
userRouter.get('/:id', verifyToken, isUser, productController.getProduct);


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

userRouter.post("/exchange", verifyToken, isUser , canjeController.createOrder)


module.exports = userRouter;
