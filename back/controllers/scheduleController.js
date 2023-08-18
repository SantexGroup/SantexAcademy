const { ScheduleService } = require("../services");
const { validationResult } = require("express-validator");

const getSchedules = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(403).send({ errors: result.array() });
  }
  try {
    const Schedules = await ScheduleService.getSchedules();
    res.status(200).json(Schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(403).send({ errors: result.array() });
  }
  const { active, where, course, day, schedule } = req.body;
  try {
    const newSchedule = await ScheduleService.createSchedule({
      active,
      where,
      course,
      day,
      schedule
    });

    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByIdSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(403).send({ errors: result.array() });
  }
  const ScheduleId = req.params.ScheduleId;
  try {
    const Schedule = await ScheduleService.getSchedule(ScheduleId);
    res.status(200).json(Schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(403).send({ errors: result.array() });
  }
  const ScheduleId = req.params.ScheduleId;
  const { active, where, day, schedule } = req.body;
  try {
    const newSchedule = await ScheduleService.updateSchedule(ScheduleId, {

      active,
      where,
      day,
      schedule
    });
    res.status(200).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchedule = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(403).send({ errors: result.array() });
  }
  const ScheduleId = req.params.ScheduleId;
  try {
    const Schedule = await ScheduleService.deleteSchedule(ScheduleId);
    res.status(200).json(Schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchedule,
  getByIdSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};
