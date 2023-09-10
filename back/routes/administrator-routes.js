const Express = require('express');
const adminController = require('../controllers/administrator-controller');
const { isAuthenticatedAdmin } = require('../middleware/authentication');

const router = Express.Router();

router.get('/datos', isAuthenticatedAdmin, adminController.getData);
router.get('/get-all-administrator', adminController.getAllAdministrator);
router.get('/get-administrator-by-id/:id', adminController.getAdministratorById);
router.post('/login', adminController.login);
router.post('/create-user', adminController.createAdministrator);
router.put('/edit-user/:id', isAuthenticatedAdmin, adminController.editAdministrator);
router.put('/modify-password/:id', isAuthenticatedAdmin, adminController.modifyPasswordController);
router.delete('/delete-user/:id', isAuthenticatedAdmin, adminController.deleteAdministrator);

/* router.get('/get-all-volunteer', volunteerController.getAllVolunteer);
router.get('/get-all-coordinator', coordinatorController.getAllCoordinators);

router.get('/get-all-tareas', tareasController.getAllTareas);
router.post('/create-tareas', tareasController.createTareas);
router.put('/edit-tareas', tareasController.editTareas);
router.delete('/delete-tareas', tareasController.deleteTareas);

router.get('/get-all', premiosController.getPremios);
router.post('/create-premios', premiosController.createPremios); */

module.exports = router;
