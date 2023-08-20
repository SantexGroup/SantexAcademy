const express = require('express');
const catalogoRouter = express.Router();
const { catalogoController } = require('../controllers');

catalogoRouter.get('/', catalogoController.getCatalog);

module.exports = catalogoRouter;
