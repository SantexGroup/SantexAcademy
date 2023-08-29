const {
  createCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
} = require("./courseController");
const {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("./categoryController");
const {
  createSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require("./scheduleController");



const CourseController = {
  createCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
};

const CategoryController = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
const ScheduleController = {
  createSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};
module.exports = { CategoryController, CourseController, ScheduleController };
