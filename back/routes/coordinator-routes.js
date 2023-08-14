const Express = require('express');
const coordinatorController = require('../controllers/coordinator-controller');

const router = Express.Router();

router.get('/get-all-coordinator', coordinatorController.getAllCoordinators);
router.get('/get-coordinator-by-id/:id', coordinatorController.getCoordinatorById);
router.post('/create-user', coordinatorController.createCoordinator);
router.put('/edit-user/:id', coordinatorController.editCoordinator);
router.delete('/delete-user/:id', coordinatorController.deleteCoordinator);
router.post('/login', coordinatorController.loginCoordinator);

module.exports = router;
