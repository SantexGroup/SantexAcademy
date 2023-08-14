const {Course,ScheduleCourses}  = require("../models");
const CategoryProvider =require("./categoryProvider")
const ScheduleProvider = require("./scheduleProvider")

const createCourse = async (CourseOptions) => {
  try {
    //obtiene el objeto
    const getObjetCategory = await CategoryProvider.getCategoryByName(CourseOptions.CourseCategoryName);
    //obtiene el id de la categoria 
    const idCategory = await CategoryProvider.getCategory(getObjetCategory.id);

    //obtiene objeto del horario
    console.log(CourseOptions.start)
    const getObjetSchedule = await ScheduleProvider.getScheduleByTime(CourseOptions.start);
    //obtiene el id del horario
    const idSchedule = await ScheduleProvider.getSchedule(getObjetSchedule.id);
    const newCourse = await Course.create({  
      name: CourseOptions.name,
      description:CourseOptions.description,
      maxStudents: CourseOptions.maxStudents,
      start: CourseOptions.start,
      end: CourseOptions.end,
      active: CourseOptions.active,
      price: CourseOptions.price,
      requirement: CourseOptions.requirement,
      teacher: CourseOptions.teacher,
      CourseCategoryId: idCategory.dataValues.id
    });
    const relation = await ScheduleCourses.create({
      idSchedule:idSchedule.dataValues.id,
      idCourse: newCourse.id
    })
    return newCourse;
  } catch (error) {
    throw error;
  }
};

const getCourse = async (id) => {

  try {
    let options = { include: [{ all: true }] };
    const CourseSelect = await Course.findByPk(id, options);
    if (CourseSelect) {
      return CourseSelect;
    } else {
      throw new Error("no Course found");
    }
  } catch (error) {
    throw error;
  }
};

const getCourses = async () => {
  try {
    let options = { include: [{ all: true }] };
    const Courses = await Course.findAll(options);
    if (Courses) {
      return Courses;
    } else {
      throw new Error("no Courses found");
    }
  } catch (error) {
    throw error;
  }
};

const updateCourse = async (CourseId, CourseOptions) => {
  try {
    await getCourse(CourseId);
    await Course.update(CourseOptions, { where: { id: CourseId } });
    return Course.findByPk(CourseId);
  } catch (error) {
    throw error;
  }
};

const deleteCourse = async (CourseId) => {
  try {
    return Course.destroy({ where: { id: CourseId } });
  } catch (error) {
    throw error;
  }
};

//exports
module.exports = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,

};
