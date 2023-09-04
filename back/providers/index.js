const {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} = require("./courseProvider");
const {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} = require("./categoryProvider");
const {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
} = require("./scheduleProvider");


const CourseProvider = {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
};
const CategoryProvider = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
};
const ScheduleProvider = {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
};
module.exports = { CourseProvider, CategoryProvider, ScheduleProvider };
