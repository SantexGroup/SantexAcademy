const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

//endpoints 

//createUser
// router.get('/getUser/:id', userController.getUserById)
router.post('/createUser', userController.createUser);


module.exports = router