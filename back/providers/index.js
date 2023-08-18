const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} = require("./courseProvider");
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} = require("./categoryProvider");
const {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
} = require("./scheduleProvider");


const CourseProvider = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
};
const CategoryProvider = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
};
const ScheduleProvider = {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
};
module.exports = { CourseProvider, CategoryProvider, ScheduleProvider };
