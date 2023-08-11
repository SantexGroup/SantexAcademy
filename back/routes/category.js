const express = require("express");
const router = express.Router();
const { CategoryController } = require("../controllers");



router.get("/", CategoryController.getCategories);
router.get("/:CategoryId", CategoryController.getByIdCategory);



router.post("/", CategoryController.createCategory);

router.put("/:CategoryId",CategoryController.updateCategory);

router.delete( "/:CategoryId",CategoryController.deleteCategory);

module.exports = router;
