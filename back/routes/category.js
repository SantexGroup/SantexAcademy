const express = require("express");
const router = express.Router();
const { CategoryController } = require("../controllers");
const { body, query } = require("express-validator");

router.get("/", CategoryController.getCategories);
router.get("/:CategoryId", CategoryController.getCategoryById);

router.post("/", body("name").isString(), CategoryController.createCategory);

router.put(
  "/:CategoryId",
  body("name").isString(),
  CategoryController.updateCategory
);

router.delete("/:CategoryId", CategoryController.deleteCategory);

module.exports = router;
