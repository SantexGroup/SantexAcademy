const express = require('express');
const alquilerController = require('../controllers/alquiler-controller');

const router = express.Router();

router.get('/:idComprador', alquilerController.getAlquileresByIdComprador);

module.exports = router;
