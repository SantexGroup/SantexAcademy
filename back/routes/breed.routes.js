const Express = require('express');
const Passport = require('passport');
const breedControllers = require('../controllers/breed.controller');
require('../middleware/passport.middleware')(Passport);
//const BreedValidation = require('../middleware/createBreedsValidations/validations');
//const Validator = require('../middleware/validationBreeds.middleware ');

//const router = express.Router();

//router.post("/", canControllers.altaDog);
 
const app = Express();


app.get('/list/',
[
    //Passport.authenticate('jwt', { session: false }),
],
    breedControllers.breedsList);

module.exports = app;