const express = require('express');
const router = express.Router();
const db = require('../models');
const controller = require('../controllers/products.controller');

// Create
//local.../products/
router.post('/crear', controller.create);
//router.get("/get",null /**controller.get*/);
//router.get("/get/:id",null /**controller.getByID*/);
//router.put("/edit",null /**controller.edit*/);
//router.delete("/delete",null /**controller.delete*/);
module.exports = router;
