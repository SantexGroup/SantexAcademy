const express = require('express');

const recompensaRouter = express.Router();
const { recompensaController } = require('../controllers');

recompensaRouter.post('/', recompensaController.createRecompensa);
recompensaRouter.get('/', recompensaController.getAllRecompensas);
recompensaRouter.get('/:id', recompensaController.getRecompensa);
recompensaRouter.put('/:id', recompensaController.updateRecompensa);
recompensaRouter.delete('/:id', recompensaController.deleteRecompensa);

module.exports = recompensaRouter;
