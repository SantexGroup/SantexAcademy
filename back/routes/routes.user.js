const express = require("express");
const router = express.Router();
const db = require("../models");
const controller = require("../controllers/user.controller");
const multerMId = require("../middleware/multer.middleware");
// Create
//local.../products/
router.post("/", multerMId.single('profilePic'),  controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.put("/:id", multerMId.single("profilePic"),  controller.edit);
router.delete("/:id", controller.delete);
router.post("/login", controller.login);
module.exports = router;
