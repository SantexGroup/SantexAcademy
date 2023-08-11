const {schedule} = require("../models");



const createSchedule = async (options) => {
  console.log(options)
  try {

    const  newSchedule = await schedule.create(options);
    
    return newSchedule;
  } catch (error) {
    throw error;
  }
};

const getSchedules = async () => {
  try {
    const Schedules = await schedule.findAll();
    if (Schedules) {
      return Schedules;
    } else {
      throw new Error("no Schedules found");
    }
  } catch (error) {
    throw error;
  }
};

const getSchedule = async (id) => {
  try {
    const Schedule = await schedule.findByPk(id);
    if (Schedule) {
      return Schedule;
    } else {
      throw new Error("no get Schedule found");
    }
  } catch (error) {
    throw error;
  }
};

const updateSchedule = async (ScheduleId, ScheduleOptions) => {
  try {
    await getSchedule (ScheduleId);
    await schedule.update(ScheduleOptions, { where: { id: ScheduleId } });
    return schedule.findByPk(ScheduleId);
  } catch (error) {
    throw error;
  }
};

const deleteSchedule = async (ScheduleId) => {
  try {
    return schedule.destroy({ where: { id: ScheduleId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,

};