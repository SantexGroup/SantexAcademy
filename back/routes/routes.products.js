const express = require('express');
const router = express.Router();
const db = require('../models');
const controller = require('../controllers/products.controller');

// Create
//local.../products/
router.post('/', controller.create);
router.get("/",controller.getAll);
router.get("/:id",controller.getByID);
router.put("/:id",controller.editByID);
router.delete("/:id",controller.delete);
router.get('/byname/:name', controller.GetByName);
module.exports = router;
