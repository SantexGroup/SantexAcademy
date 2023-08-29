const {ScheduleProvider} = require("../providers");

const getSchedules = async () => {
  return await ScheduleProvider.getSchedules();
};

const getSchedule= async (id) => {
  return await ScheduleProvider.getScheduleById(id);
};

const createSchedule = async (options) => {
  return await ScheduleProvider.createSchedule(options);
};

const updateSchedule = async (id, options) => {
  return await ScheduleProvider.updateSchedule(id, options);
};

const deleteSchedule = async (id) => {
  return await ScheduleProvider.deleteSchedule(id);
};

//exports
module.exports = { createSchedule ,deleteSchedule, getSchedule, getSchedules, updateSchedule };
