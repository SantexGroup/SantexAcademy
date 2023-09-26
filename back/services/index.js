const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} = require('./courseService');
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} = require('./categoryService');
const {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
} = require('./scheduleService');
const {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
} = require('./userService');

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
const UserService = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
};
module.exports = {
  CourseService, CategoryService, ScheduleService, UserService,
};
