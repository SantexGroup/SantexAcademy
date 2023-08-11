const express = require('express');
const router = express.Router();

const {catalogoController}= require('../controllers');

router.get('/', catalogoController.getCatalog);

module.exports = router;