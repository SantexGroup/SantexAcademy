const Express = require('express');
const volunteerController = require('../controllers/volunteer-controller');
const { isAuthenticatedVoluntario } = require('../middleware/authentication');

const router = Express.Router();
router.get('/datos', isAuthenticatedVoluntario, volunteerController.getDataVoluntario);
router.get('/get-all-volunteer', volunteerController.getAllVolunteer);
router.get('/get-volunteer-by-id/:id', volunteerController.getVolunteerById);
router.post('/create-user', volunteerController.createVolunteer);
router.put('/edit-user/:id', isAuthenticatedVoluntario, volunteerController.editVolunteer);
router.delete('/delete-user/:id', isAuthenticatedVoluntario, volunteerController.deleteVolunteer);
router.post('/login', volunteerController.loginVolunteer);
router.put('/modify-password/:id', isAuthenticatedVoluntario, volunteerController.modifyPasswordController);
router.put('/asign-work/:id', isAuthenticatedVoluntario, volunteerController.asingVolunteerWork);

module.exports = router;
