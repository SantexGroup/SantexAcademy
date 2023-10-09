const Express = require('express');
const adminController = require('../controllers/administrator-controller');
const volunteerController = require('../controllers/volunteer-controller');
const coordinatorController = require('../controllers/coordinator-controller');

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
router.get('/get-all-coordinator',isAuthenticatedAdmin,coordinatorController.getAllCoordinators);
router.get('/volunteer',isAuthenticatedAdmin,volunteerController.getAllVolunteer);

module.exports = router;
