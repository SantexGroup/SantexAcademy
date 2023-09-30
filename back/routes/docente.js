const express = require('express');

const router = express.Router();
const docenteController = require('../controllers/docente');

router.get('/', docenteController.allDocentes);

module.exports = router;
