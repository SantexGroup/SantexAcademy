const express = require('express');

const voluntariadoRouter = express.Router();

const { voluntariadoController } = require('../controllers');

voluntariadoRouter.get('/', voluntariadoController.getVoluntariadosByCriteria);
voluntariadoRouter.post('/create', voluntariadoController.createVoluntariado);
voluntariadoRouter.put('/update/:id', voluntariadoController.updateVoluntariadoById);
voluntariadoRouter.delete('/delete/:id', voluntariadoController.deleteVoluntariadoById);

module.exports = voluntariadoRouter;
