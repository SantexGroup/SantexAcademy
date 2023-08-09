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

module.exports = {
  getAllCourses,
};
