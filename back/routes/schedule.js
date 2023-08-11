const express = require("express");
const router = express.Router();
const { ScheduleController } = require("../controllers");



router.get("/", ScheduleController.getSchedules);
router.get("/:ScheduleId", ScheduleController.getByIdSchedule);



router.post("/", ScheduleController.createSchedule);

router.put("/:ScheduleId",ScheduleController.updateSchedule);

router.delete("/:ScheduleId",ScheduleController.deleteSchedule);

module.exports = router;
