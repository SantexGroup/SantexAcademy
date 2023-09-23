const express = require("express");
const upload = require("../config/multerConfig");
const authRouter = express.Router();
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
  upload.single("file"),
  createAndUpdateUserValidation,
  async (req, res) => {
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
  createAndUpdateOrganizationValidation,
  orgController.createOrganization
);

authRouter.post(
  "/org/login",
  loginOrganizationValidation,
  orgController.loginOrganization
);

module.exports = authRouter;
