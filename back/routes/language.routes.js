const express = require('express');

const router = express.Router();
const langujeController = require('../controllers/language.controller');

// endpoint que agrega un lenguaje al perfil
router.post('/new', langujeController.addLanguageToProfile);
// endpoint que busca los lenguajes de un perfil
router.get('/allLanguages/:id', langujeController.getLanguagesByUser);

module.exports = router;
