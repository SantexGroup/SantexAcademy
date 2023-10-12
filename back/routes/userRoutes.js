const express = require('express');
const validateToken = require('../middleware/validateToken');
const userController = require('../controllers/userController');
const router = express.Router();

// endpoints

router.post('/createUser', userController.createUser);
router.post('/login',userController.loginUser);
router.get('/getAll', validateToken,userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/editUser/:id', userController.editUser)
router.delete('/deleteUser/:id', userController.deleteUser)
module.exports = router;
