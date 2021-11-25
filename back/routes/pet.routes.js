const Express = require('express');
const Passport = require('passport');
const petController = require('../controllers/pet.controllers');
require('../middleware/passport.middleware')(Passport);
const PetValidator = require('../middleware/validations/pets/pet.validations.middleware');
const Validator = require('../middleware/validation.middleware');

const app = Express();

// Recupera todas las mascotas registradas
app.get(
  '/',
  [Passport.authenticate('jwt', { session: false })],
  PetValidator.validate('list'),
  Validator.checkValidationResult,
  petController.listAllPets
);
// TODO: Mover y adaptar esta ruta al router de users
app.get(
  '/:id',
  [Passport.authenticate('jwt', { session: false })],
  petController.listPets
);

app.post(
  '/',
  Passport.authenticate('jwt', { session: false }),
  PetValidator.validate('register'),
  Validator.checkValidationResult,
  petController.newPet
);

module.exports = app;
