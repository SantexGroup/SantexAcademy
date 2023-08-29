const courseProvider = require('./course');
const userProvider = require('./user');
const courseDetailProvider = require('./courseDetail');
const teacherProvider = require('./teacher');
const StudentProvider = require('./student');
const cohortProvider = require('./cohort');

module.exports = {
  courseProvider,
  teacherProvider,
  userProvider,
  courseDetailProvider,
  StudentProvider,
  cohortProvider,
};
