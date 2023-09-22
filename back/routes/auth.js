const express = require("express");
const upload = require("../config/multerConfig");
const authRouter = express.Router();
<<<<<<< HEAD

const { userController, orgController } = require('../controllers');

const { validationResult } = require('express-validator');
const { createAndUpdateUserValidation, loginUserValidation } = require('../middleware/validations.UserEntity');
const { createAndUpdateOrganizationValidation, loginOrganizationValidation } = require('../middleware/validation.OrgEntity');

=======
const { validationResult } = require("express-validator");
const {
  createAndUpdateUserValidation,
  loginUserValidation,
} = require("../middleware/validations.UserEntity");
const {
  createAndUpdateOrganizationValidation,
  loginOrganizationValidation,
} = require("../middleware/validation.OrgEntity");
const { userController, orgController } = require("../controllers");
>>>>>>> upstream/dev

authRouter.post("/users/login", loginUserValidation, async (req, res) => {
  // Comprueba las validaciones antes de ejecutar el controlador de login de usuarios
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  userController.loginUser(req, res);
});

authRouter.post(
  "/users/register",
  createAndUpdateUserValidation,
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    userController.createUser(req, res);
  }
);

authRouter.post(
  "/org/register",
  upload.single("file"),
  orgController.createOrganization
  // createAndUpdateOrganizationValidation,
  // async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     const errorMessages = errors.array().map((error) => error.msg);
  //     return res.status(400).json({ errors: errorMessages });
  //   }
  //   orgController.createOrganization(req, res);
  // }
);

authRouter.post(
  "/org/login",
  orgController.loginOrganization

  // loginOrganizationValidation, async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     const errorMessages = errors.array().map((error) => error.msg);
  //     return res.status(400).json({ errors: errorMessages });
  //   }
  //   orgController.loginOrganization(req, res);
  // }
);

module.exports = authRouter;
