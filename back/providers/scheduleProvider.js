const { Schedule, ScheduleCourses, Course } = require("../models");

const createSchedule = async (options) => {
  try {
    const checkExist = await Schedule.findOne({
      where: { day: options.day, schedule: options.schedule },
    });

    if (checkExist)throw new Error("Schedule already exists");
    const CourseSelect = await Course.findOne({
      where: { name: options.course },
    });
    if (!CourseSelect) {
      throw new Error("no get Course found");
    }

    //crea el horario
    const newSchedule = await Schedule.create(options);
    //crea la relacion de las tablas
    const relation = await ScheduleCourses.create({
      idSchedule: newSchedule.id,
      idCourse: CourseSelect.id,
    });

    return newSchedule;
  } catch (error) {
    throw error;
  }
};

const getScheduleByTime = async (start) => {
  try {
    const scheduleSelect = await Schedule.findOne({ where: { start } });
    return scheduleSelect;

  } catch (error) {
    throw error;
  }
};

const getSchedules = async () => {
  try {
    const schedules = await Schedule.findAll();
    return schedules;

  } catch (error) {
    throw error;
  }
};

const getScheduleById = async (ScheduleId) => {
  try {
    const scheduleSelect = await Schedule.findByPk(ScheduleId);
    return scheduleSelect;

  } catch (error) {
    throw error;
  }
};

const updateSchedule = async (ScheduleId, ScheduleOptions) => {
  try {
    await getScheduleById(ScheduleId);
    await Schedule.update(ScheduleOptions, { where: { id: ScheduleId } });
    return Schedule.findByPk(ScheduleId);
  } catch (error) {
    throw error;
  }
};

const deleteSchedule = async (ScheduleId) => {
  try {
    ScheduleCourses.destroy({ where: { id: ScheduleId } });
    return Schedule.destroy({ where: { id: ScheduleId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  getScheduleByTime,
};
