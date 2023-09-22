const express = require('express');
const imagesController = require('../controllers/images-controller');

const router = express.Router();

// guardar registros de imagenes
router.post('/:imageUrl/:idProd', imagesController.saveImages);

// obtener una imagen
router.get('/:image', imagesController.getImages);

module.exports = router;