const express = require('express');

const voluntariadoRouter = express.Router();
const { voluntariadoController } = require('../controllers');

voluntariadoRouter.post('/:idOrg', voluntariadoController.createVoluntariado);
voluntariadoRouter.get('/:idOrg', voluntariadoController.getVoluntariadosByCriteria);
voluntariadoRouter.put(
  '/:idOrg/:idVoluntariado',
  voluntariadoController.updateVoluntariadoById,
);
voluntariadoRouter.delete(
  '/:idVoluntariado',
  voluntariadoController.deleteVoluntariadoById,
);

module.exports = voluntariadoRouter;
