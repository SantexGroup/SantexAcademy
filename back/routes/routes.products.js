const express = require('express');
const router = express.Router();
const db = require('../models');
const controller = require('../controllers/products.controller');

// Create
//local.../products/
router.post('/', controller.create);
router.get("/",controller.getAll);
//router.get("/get/:id",null /**controller.getByID*/);
//router.put("/edit",null /**controller.edit*/);
//router.delete("/delete",null /**controller.delete*/);
module.exports = router;
