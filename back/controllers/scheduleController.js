const { ScheduleService } = require("../services");
const { validationResult } = require("express-validator");

const getSchedules = async (req, res) => {
  try {
    const schedules = await ScheduleService.getSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
const createSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const {  active,
    where,
    course,
    day,
    schedule, 
  } = req.body;
  try {
    const newSchedule = await ScheduleService.createSchedule({
      active,
      where,
      course,
      day,
      schedule,
    });

    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const getScheduleById = async (req, res) => {
  const scheduleId = req.params.ScheduleId;
  try {
    const schedule = await ScheduleService.getSchedule(scheduleId);
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const updateSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const scheduleId = req.params.ScheduleId;
  const { active, where, day, schedule } = req.body;
  try {
    const newSchedule = await ScheduleService.updateSchedule(scheduleId, {
      active,
      where,
      day,
      schedule,
    });
    res.status(200).json(newSchedule);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const deleteSchedule = async (req, res) => {
  const scheduleId = req.params.ScheduleId;
  try {
    const schedule = await ScheduleService.deleteSchedule(scheduleId);
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

module.exports = {
  createSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};
