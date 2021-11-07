const Express = require('express');
const Passport = require('passport');
const petController = require('../controllers/pet.controllers');
require('../middleware/passport.middleware')(Passport);
const PetValidator = require('../middleware/validations/pets/pet.validations.middleware');
const Validator = require('../middleware/validation.middleware');

const app = Express();

app.post('/',
  Passport.authenticate('jwt', { session: false }),
  PetValidator.validate('register'),
  Validator.checkValidationResult,
  petController.newPet);
module.exports = app;
