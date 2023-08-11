const {Course,CourseCategory}  = require("../models");
const a =require("./categoryProvider")


const createCourse = async (CourseOptions) => {
  try {
    console.log("------------------------------------------")
    //const category = await a.getCategory(1);
    //console.log(category)
    const newCourse = await Course.create({    
      name: CourseOptions.name,
      description:CourseOptions.description,
      maxStudents: CourseOptions.maxStudents,
      start: CourseOptions.start,
      end: CourseOptions.end,
      active: CourseOptions.active,
      price: CourseOptions.price,
      requirement: CourseOptions.requirement,
      teacher: CourseOptions.teacher
      //CourseCategoryId: category.id,
    });

    return newCourse;
  } catch (error) {
    throw error;
  }
};

const getCourse = async (id) => {

  try {
    const CourseSelect = await Course.findByPk(id);
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
