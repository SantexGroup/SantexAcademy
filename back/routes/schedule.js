const express = require("express");
const router = express.Router();
const { ScheduleController } = require("../controllers");
const { body, query } = require("express-validator");

router.get("/", ScheduleController.getSchedules);
router.get("/:ScheduleId", ScheduleController.getByIdSchedule);

router.post(
  "/",
  body("start").isString(),
  body("end").isString(),
  body("active").isBoolean(),
  body("where").isString(),
  body("course").isString(),
  ScheduleController.createSchedule
);

router.put(
  "/:ScheduleId",
  body("start").isString(),
  body("end").isString(),
  body("active").isBoolean(),
  body("where").isString(),
  ScheduleController.updateSchedule
);

router.delete("/:ScheduleId", ScheduleController.deleteSchedule);

module.exports = router;
