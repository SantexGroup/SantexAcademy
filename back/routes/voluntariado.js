const express = require('express');

const voluntariadoRouter = express.Router();
const { voluntariadoController } = require('../controllers');
const { usuarioEnVoluntariadoRouter } = require('./usuarioEnVoluntariado');

const  { verifyToken , isAdmin, isOrg  }  = require('../middleware/authMiddleware');


voluntariadoRouter.post('/:idOrg', verifyToken, isOrg, voluntariadoController.createVoluntariado);
voluntariadoRouter.get('/:idOrg', voluntariadoController.getVoluntariadosByCriteria);

voluntariadoRouter.put(
  '/:idOrg/:idVoluntariado', verifyToken, isOrg,
  voluntariadoController.updateVoluntariadoById,
);

voluntariadoRouter.delete(
  '/:idVoluntariado', verifyToken, isOrg,
  voluntariadoController.deleteVoluntariadoById,
);

voluntariadoRouter.delete(
  '/admin/:idOrg/:idVoluntariado', verifyToken, isOrg,
  voluntariadoController.deleteVoluntariadoById,
);

module.exports = voluntariadoRouter;
