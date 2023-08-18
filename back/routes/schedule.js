const express = require("express");
const router = express.Router();
const { ScheduleController } = require("../controllers");
const { body, query } = require("express-validator");

router.get("/", ScheduleController.getSchedules);
router.get("/:ScheduleId", ScheduleController.getByIdSchedule);

router.post(
  "/",
  body("active").isBoolean(),
  body("where").isString(),
  body("course").isString(),
  body("day").isString(),
  body("schedule").isString(),
  ScheduleController.createSchedule
);

router.put(
  "/:ScheduleId",
  body("active").isBoolean(),
  body("where").isString(),
  body("day").isString(),
  body("schedule").isString(),
  ScheduleController.updateSchedule
);

router.delete("/:ScheduleId", ScheduleController.deleteSchedule);

module.exports = router;
