const {Schedule,ScheduleCourses,Course} = require("../models");
const CourseProvider= require('./courseProvider')


const createSchedule = async (options) => {
  try {
    const checkExist = await Schedule.findOne({where:{start:options.start, end:options.end}})
    if(checkExist)throw new Error("Schedule already exists");

    // no funciona si lo hago con el provider de Course
    const CourseSelect = await Course.findOne({where: { name:options.course},});
    if (!CourseSelect){
      throw new Error("no get Course found");
    }
    //crea el horario
    const  newSchedule = await Schedule.create(options);
    //crea la relacion de las tablas
    const relation = await ScheduleCourses.create({
      idSchedule:newSchedule.id,
      idCourse: CourseSelect.id
    })

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