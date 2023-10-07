const express = require("express");
const upload = require("../config/multerConfig");
const authRouter = express.Router();
const { userController, orgController } = require("../controllers");
const { sendMail } = require("../config/send_gmail");

const {
  signUpVolunteer,
  mailFoudVolunteer,
  mailFoudOrg,
  signUpCoordinator,
} = require("../middleware/validatorSignUp");

authRouter.post("/users/login", userController.loginUser);

authRouter.post(
  "/users/register",
  upload.single("file"),
  signUpVolunteer,
  mailFoudVolunteer,
  userController.createUser
);

authRouter.post(
  "/org/register",
  upload.single("file"),
  signUpCoordinator,
  mailFoudOrg,
  orgController.createOrganization
);

authRouter.post("/org/login", orgController.loginOrganization);

authRouter.post("/sendemail", sendMail);

module.exports = authRouter;
