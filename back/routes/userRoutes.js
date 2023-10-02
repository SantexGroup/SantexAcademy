const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const authenticateToken = require('../middleware/authentication')

// endpoints

router.post('/createUser', userController.createUser);
router.post('/login',userController.loginUser);
router.get('/getAll', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/editUser/:id', userController.editUser)
router.delete('/deleteUser/:id', userController.deleteUser)
module.exports = router;
