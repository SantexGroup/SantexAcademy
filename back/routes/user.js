const express = require('express');
// const { body } = require('express-validator');
const router = express.Router();
const { userController } = require('../controllers');

router.get('/:idUser', userController.getUser);
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:idUser', userController.deleteUser);
router.put('/:idUser', userController.updateUser);

module.exports = router;
