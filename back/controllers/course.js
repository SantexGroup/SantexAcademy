const { CourseServices } = require('../services');

// eslint-disable-next-line no-unused-vars
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
  createCourseCont,
};
