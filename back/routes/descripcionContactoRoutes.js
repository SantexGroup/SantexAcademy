const express = require('express');

const router = express.Router();
const descripcionContactoController = require('../controllers/descripcionContactoControllers');

router.get('/', descripcionContactoController.getAllDescripciones);

router.get('/:id', descripcionContactoController.getDescripcionById);

router.post('/', descripcionContactoController.createDescripcion);

router.put('/:id', descripcionContactoController.updateDescripcion);

router.delete('/:id', descripcionContactoController.deleteDescripcion);

module.exports = router;
