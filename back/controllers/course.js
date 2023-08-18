const { CourseServices } = require('../services');

const getAllCourses = async (req, res) => {
  try {
    const getAll = await CourseServices.getAllCourses();
    res.status(200).send({
      payload: getAll,
    });
  } catch (error) {
    res.status(400).json({
      action: 'getAllCourses',
      error: error.message,
    });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await CourseServices.getOneCourse(req.params.courseId);
    if (!course) {
      res.status(404).json({ action: 'getCourse', error: 'Course not found' });
    } else {
      res.status(200).send({
        payload: course,
      });
    }
  } catch (error) {
    res.status(400).json({
      action: 'getCourse',
      error: error.message,
    });
  }
};

const createCourseCont = async (req, res) => {
  try {
    const newCourse = await CourseServices.createCourseServ(req.body);
    res.status(201).send({
      newCourse,
    });
  } catch (error) {
    res.status(400).json({
      action: 'createCourse',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourseCont,
};
