const Express = require('express');
const Passport = require('passport');
// const { Console } = require("winston/lib/winston/transports");
const breedControllers = require('../controllers/breed.controller');
require('../middleware/passport.middleware')(Passport);
// const BreedValidation = require('../middleware/createBreedsValidations/validations');
// const Validator = require('../middleware/validationBreeds.middleware ');

// const router = express.Router();

// router.post("/", canControllers.altaDog);

const app = Express();

app.get(
  '/list/',
  [
    // Passport.authenticate('jwt', { session: false }),
  ],
  breedControllers.breedsList,
);

app.get(
  '/info/:id',
  [
    // Passport.authenticate('jwt', { session: false }),
  ],
  breedControllers.breedInfo,
);

module.exports = app;
