const Express = require('express');
const volunteerController = require('../controllers/volunteer-controller');

const router = Express.Router();

router.get('/get-all-volunteer', volunteerController.getAllVolunteer);
router.get('/get-volunteer-by-id/:id', volunteerController.getVolunteerById);
router.post('/create-user', volunteerController.createVolunteer);
router.put('/edit-user/:id', volunteerController.editVolunteer);
router.delete('/delete-user/:id', volunteerController.deleteVolunteer);
router.post('/login', volunteerController.loginVolunteer);

module.exports = router;
