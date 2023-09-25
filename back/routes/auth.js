const express = require("express");
const upload = require("../config/multerConfig");
const authRouter = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD

const { userController, orgController } = require('../controllers');

const { validationResult } = require('express-validator');
const { createAndUpdateUserValidation, loginUserValidation } = require('../middleware/validations.UserEntity');
const { createAndUpdateOrganizationValidation, loginOrganizationValidation } = require('../middleware/validation.OrgEntity');

=======
=======

>>>>>>> 0feae19d283890a32cf63f98b9a678c6b3777b49
const { userController, orgController } = require("../controllers");
const {
  signUpVolunteer,
  mailFoudVolunteer,
  mailFoudOrg,
  signUpCoordinator,
} = require("../middleware/validatorSignUp");
<<<<<<< HEAD
>>>>>>> 36e54811ba589d21a1271a56267850e45c3a785f
=======
>>>>>>> 0feae19d283890a32cf63f98b9a678c6b3777b49

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

module.exports = authRouter;
