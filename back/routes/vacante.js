const express = require('express');

const vacanteRouter = express.Router();
const { vacanteController } = require('../controllers');

vacanteRouter.post('/create', vacanteController.createVacante);
vacanteRouter.get('/', vacanteController.getVacantesByCriteria);
vacanteRouter.put('/:id', vacanteController.updateVacanteById);
vacanteRouter.delete('/:id', vacanteController.deleteVacanteById);

module.exports = vacanteRouter;
