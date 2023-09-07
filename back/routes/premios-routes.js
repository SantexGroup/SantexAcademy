const Express = require ('express');
const premiosController = require('../controllers/premios-controller');

const router = Express.Router();

router.get('/get-all', premiosController.getAllPremios);
router.get('/get-by-id/:id', premiosController.getPremiosById);
router.post('/create-premios', premiosController.createPremios);
router.put('/edit-premios/:id', premiosController.editPremios);
router.delete('/delete-premios/:id', premiosController.deletePremios);

module.exports = router;
