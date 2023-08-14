const express = require("express");
const router = express.Router();
const { CourseController } = require("../controllers");
const { body, query } = require("express-validator");

router.get("/", CourseController.getCourses);

router.get("/:CourseId", CourseController.getByIdCourse);

router.post(
  "/",
  body("name").isString(),
  body("description").isString(),
  body("maxStudents").isInt(),
  body("start").isString(),
  body("end").isString(),
  body("active").isBoolean(),
  body("price").isInt(),
  body("requirement").isString(),
  body("teacher").isString(),
  body("CourseCategoryName").isString(),

  CourseController.createCourse
);

router.put(
  "/:CourseId",
  body("name").isString(),
  body("description").isString(),
  body("maxStudents").isInt(),
  body("start").isString(),
  body("end").isString(),
  body("active").isBoolean(),
  body("price").isInt(),
  body("requirement").isString(),
  body("teacher").isString(),
  body("CourseCategoryName").isString(),
  CourseController.updateCourse
);

router.delete("/:CourseId", CourseController.deleteCourse);

//export
module.exports = router;
