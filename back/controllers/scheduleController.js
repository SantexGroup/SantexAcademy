const { ScheduleService } = require("../services");

const getSchedules = async (req, res) => {
  try {
    const Schedules = await ScheduleService.getSchedules();
    res.status(200).json(Schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createSchedule = async (req, res) => {
  const {start,end, active, where  } = req.body;
  console.log(req.body);

  const newSchedule = await ScheduleService.createSchedule({
    start,end, active, where 
  });

  res.status(201).json(newSchedule);
};

const getByIdSchedule = async (req, res) => {
  const ScheduleId = req.params.ScheduleId;
  try {
    const Schedule = await ScheduleService.getSchedule(ScheduleId);
    res.status(200).json(Schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchedule = async (req, res) => {
  const ScheduleId = req.params.ScheduleId;
  const { start,end, active, where  } = req.body;
  try {
    const newSchedule = await ScheduleService.updateSchedule(ScheduleId, {
      start,end, active, where
    });
    res.status(200).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchedule = async (req, res) => {
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
