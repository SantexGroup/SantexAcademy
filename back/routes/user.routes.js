const express = require('express');
const { userValidations } = require('../validations');
const { checkValidationResult } = require('../middleware');
const upload = require('../services/toolServices/multer.services');
const uploadDrive = require('../services/toolServices/google.services');

const router = express.Router();
const userController = require('../controllers/user.controller');

const createValidation = [userValidations.create, checkValidationResult];
const updateValidation = [userValidations.update, checkValidationResult];
const loginValidation = [userValidations.login, checkValidationResult];

router.post('/record', createValidation, userController.recordUser);
router.post('/login', loginValidation, userController.login);
router.post('/upload', upload, uploadDrive); /* Ruta para subir las imagenes a GoogleDrive */
router.get('/getUser/:id', userController.getUser); //* agregado
router.put('/update/:id', updateValidation, userController.updateUser);
router.delete('/remove/:id', userController.userDeleted);

module.exports = router;
