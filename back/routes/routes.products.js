const express = require('express');
const router = express.Router();
const db = require('../models');
const controller = require('../controllers/products.controller');
 const multerMId = require( '../middleware/multer.middleware');

// Create
//local.../products/
router.post('/', multerMId.single('image') , controller.create);
router.get("/",controller.getAll);
router.get("/:id",controller.getByID);
router.put("/:id",multerMId.single('image'),controller.editByID);
router.delete("/:id",controller.delete);
router.get('/byname/:name', controller.GetByName);


module.exports = router;
