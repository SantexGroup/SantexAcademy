const express = require('express');

const router = express.Router();
const ExperinceController = require('../controllers/experience.controller');
// Ruta para obetener 1 Experiences
router.get('/getexperience/:id', ExperinceController.experienceGet);
// Ruta para obetener todas las Experiences de un usuario
router.get('/allexperience/:id', ExperinceController.experienceGetAll);
// Ruta para agregar 1 Experiences y su relacionen Profile_Experiences
router.post('/addexperience', ExperinceController.experienceAdd);
// Ruta para eliminar 1 Experiences
router.delete('/delexperience/:id', ExperinceController.experienceDelete);
// Ruta para actualizar 1 Experiences
router.put('/upexperience/:id', ExperinceController.experienceUpdate);

module.exports = router;
