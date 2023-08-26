const Express = require('express');
const coordinatorController = require('../controllers/coordinator-controller');
const { isAuthenticatedOrganizacion } = require('../middleware/authentication');

const router = Express.Router();
router.get('/datos', isAuthenticatedOrganizacion, coordinatorController.getDataOrganizacion);
router.get('/get-all-coordinator', coordinatorController.getAllCoordinators);
router.get('/get-coordinator-by-id/:id', coordinatorController.getCoordinatorById);
router.post('/create-user', coordinatorController.createCoordinator);
router.put('/edit-user/:id', isAuthenticatedOrganizacion, coordinatorController.editCoordinator);
router.delete('/delete-user/:id', isAuthenticatedOrganizacion, coordinatorController.deleteCoordinator);
router.post('/login', coordinatorController.loginCoordinator);
router.put('/modify-password/:id', isAuthenticatedOrganizacion, coordinatorController.modifyPasswordController);

module.exports = router;
