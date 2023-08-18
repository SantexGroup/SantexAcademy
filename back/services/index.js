const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} = require("./courseService");
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} = require("./categoryService");
const {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
} = require("./scheduleService");


const CourseService = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
};
const CategoryService = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
};
const ScheduleService = {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
};
module.exports = { CourseService, CategoryService, ScheduleService };
