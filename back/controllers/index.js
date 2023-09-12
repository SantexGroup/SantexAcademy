const {
  createCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
} = require('./courseController');
const {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
} = require('./categoryController');
const {
  createSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require('./scheduleController');
const {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} = require('./userController');

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
const UserController = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
module.exports = {
  CategoryController, CourseController, ScheduleController, UserController,
};
