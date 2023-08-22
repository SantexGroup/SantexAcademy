const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

//endpoints 
console.log("Estoy en userRoutes")
//createUser
// router.get('/getUser/:id', userController.getUserById)
router.post('/createUser', userController.createUser);


module.exports = router