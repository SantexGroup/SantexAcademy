const express = require('express');

const authRouter = express.Router();
const { userController, orgController } = require('../controllers');

const { validationResult } = require('express-validator');
const { createAndUpdateUserValidation, loginUserValidation } = require('../middleware/validations.UserEntity');
const { createAndUpdateOrganizationValidation, loginOrganizationValidation } = require('../middleware/validation.OrgEntity');



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
    // Comprueba las validaciones antes de ejecutar el controlador de actualización de usuarios
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
  createAndUpdateOrganizationValidation,
  async (req, res) => {
    // Comprueba las validaciones antes de ejecutar el controlador de registro de organizaciones
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    orgController.createOrganization(req, res);
  }
);


authRouter.post("/org/login", loginOrganizationValidation, async (req, res) => {
  // Comprueba las validaciones antes de ejecutar el controlador de login de organizaciones
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  orgController.loginOrganization(req, res);
});

module.exports = authRouter;
