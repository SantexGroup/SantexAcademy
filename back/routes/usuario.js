const express = require("express");
const userRouter = express.Router();
const upload = require("../config/multerConfig");

const {
  userController,
  usuarioEnVoluntariadoController,
  productController,
  canjeController,
} = require("../controllers");

const { verifyToken, isUser } = require("../middleware/authMiddleware");

userRouter.get("/products", productController.getAllProducts);
userRouter.get(
  "/products/:id",
  verifyToken,
  isUser,
  productController.getProduct
);

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

userRouter.post(
  "/testimonials/create",
  verifyToken,
  isUser,
  userController.createTestimonialsById
);

userRouter.get("/testimonials", userController.getAllTestimonials);

userRouter.get(
  "/me/postulations",
  verifyToken,
  isUser,
  usuarioEnVoluntariadoController.getJoins
);

userRouter.put(
  "/postulation/:idPostulation",
  usuarioEnVoluntariadoController.updateStatusById
);

userRouter.delete(
  "/postulation/:idPostulation",
  usuarioEnVoluntariadoController.deleteJoinById
);

userRouter.post("/exchange", verifyToken, isUser, canjeController.createOrder);

module.exports = userRouter;
