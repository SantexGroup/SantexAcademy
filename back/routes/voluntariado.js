const express = require('express');

const voluntariadoRouter = express.Router();
const { voluntariadoController } = require('../controllers');

const  { verifyToken , isAdmin, isOrg  }  = require('../middleware/authMiddleware');




voluntariadoRouter.post('/',verifyToken, isOrg, voluntariadoController.createVoluntariado);

//En esta ruta traemos SOLO los voluntariados que la organizacion ha creado
voluntariadoRouter.get('/me/:idOrg',verifyToken, isOrg, voluntariadoController.getVoluntariadosByOrganization);


//En esta ruta traemos todos los voluntariados y sin proteger para que cualquiera pueda ver
voluntariadoRouter.get('/all', voluntariadoController.getVoluntariadosByCriteria)



voluntariadoRouter.put(
  '/:idOrg/:idVoluntariado', verifyToken, isOrg,
  voluntariadoController.updateVoluntariadoById,
  );
  
  voluntariadoRouter.delete(
    '/:idOrg/:idVoluntariado', verifyToken, isOrg,
    voluntariadoController.deleteVoluntariadoById,
    );
        
    voluntariadoRouter.delete(
  '/admin/:idOrg/:idVoluntariado', verifyToken, isAdmin,
  voluntariadoController.deleteVoluntariadoById,
);

module.exports = voluntariadoRouter;
