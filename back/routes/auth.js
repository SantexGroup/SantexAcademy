const express = require("express");
const upload = require("../config/multerConfig");
const authRouter = express.Router();
const { userController, orgController } = require("../controllers");

authRouter.post("/users/login", userController.loginUser);
authRouter.post("/users/register", userController.createUser);
authRouter.post(
  "/org/register",
  upload.single("file"),
  orgController.createOrganization
);
authRouter.post("/org/login", orgController.loginOrganization);

module.exports = authRouter;
