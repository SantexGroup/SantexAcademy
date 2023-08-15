const {Schedule} = require("../models");



const createSchedule = async (options) => {
  console.log(options)
  try {

    const  newSchedule = await Schedule.create(options);
    
    return newSchedule;
  } catch (error) {
    throw error;
  }
};

const getScheduleByTime=async (start) =>{
  try {
    const scheduleSelect = await Schedule.findOne({where: { start},});
    if (scheduleSelect) {
      return scheduleSelect;
    } else {
      throw new Error("no get Schedule found");
    }
  } catch (error) {
    throw error;
  }
}

const getSchedules = async () => {
  try {
    const Schedules = await Schedule.findAll();
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
    const Schedule = await Schedule.findByPk(id);
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
    await Schedule.update(ScheduleOptions, { where: { id: ScheduleId } });
    return Schedule.findByPk(ScheduleId);
  } catch (error) {
    throw error;
  }
};

const deleteSchedule = async (ScheduleId) => {
  try {
    return Schedule.destroy({ where: { id: ScheduleId } });
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
  getScheduleByTime
};