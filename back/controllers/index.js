const {
  createCourse,
  getByIdCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} = require("./courseController");
const {
  createCategory,
  getByIdCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("./categoryController");
const {
  createSchedule,
  getByIdSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require("./scheduleController");



const CourseController = {
  createCourse,
  getByIdCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};

const CategoryController = {
  createCategory,
  getByIdCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
const ScheduleController = {
  createSchedule,
  getByIdSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};
module.exports = { CategoryController, CourseController, ScheduleController };
