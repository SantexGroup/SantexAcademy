const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// endpoints

router.post('/createUser', userController.createUser);
router.get('/getAll', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/editUser/:id', userController.editUser)
router.delete('/deleteUser/:id', userController.deleteUser)
module.exports = router;
