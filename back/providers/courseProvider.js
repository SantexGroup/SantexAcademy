const {
  Course,
  ScheduleCourses,
  Schedule,
  CourseCategory,
} = require("../models");
const CategoryProvider = require("./categoryProvider");
const ScheduleProvider = require("./scheduleProvider");

const createCourse = async (CourseOptions) => {
  try {
    //obtiene el objeto
    const getObjetCategory = await CategoryProvider.getCategoryByName(
      CourseOptions.CourseCategoryName
    );
    const newCourse = await Course.create({
      name: CourseOptions.name,
      image: CourseOptions.image,
      description: CourseOptions.description,
      maxStudents: CourseOptions.maxStudents,
      start: CourseOptions.start,
      end: CourseOptions.end,
      active: CourseOptions.active,
      price: CourseOptions.price,
      requirement: CourseOptions.requirement,
      teacher: CourseOptions.teacher,
      CourseCategoryId: getObjetCategory.id,
    });
    return newCourse;
  } catch (error) {
    throw error;
  }
};

const getCourseById = async (courseId) => {
  try {
    const courseSelect = await Course.findOne({
      where: { id: courseId },
      include: [
        {
          model: ScheduleCourses,
          include: [Schedule],
        },
        {
          model: CourseCategory,
        },
      ],
    });
    return courseSelect;

  } catch (error) {
    throw error;
  }
};

const getCourses = async () => {
  try {
    const courses = await Course.findAll({
      include: [
        {
          model: ScheduleCourses,
          include: [Schedule],
        },
        {
          model: CourseCategory,
        },
      ],
    });

    return courses;

  } catch (error) {
    throw error;
  }
};

const updateCourse = async (CourseId, CourseOptions) => {
  try {
    await getCourseById(CourseId);
    await Course.update(CourseOptions, { where: { id: CourseId } });
    return Course.findByPk(CourseId);
  } catch (error) {
    throw error;
  }
};

const deleteCourse = async (CourseId) => {
  try {
    const select =await Course.update(
      { active: false },
      { where: { id: CourseId, active: true } }
    );
    return select
  } catch (error) {
    throw error;
  }
};

//exports
module.exports = {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
};
