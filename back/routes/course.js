const express = require("express");
const router = express.Router();
const { CourseController } = require("../controllers");
const { body, query } = require("express-validator");

router.get("/", CourseController.getCourses);

router.get("/:CourseId", CourseController.getByIdCourse);

router.post("/", CourseController.createCourse);

router.put("/:CourseId",CourseController.updateCourse);

router.delete( "/:CourseId",CourseController.deleteCourse);

//export
module.exports = router;
