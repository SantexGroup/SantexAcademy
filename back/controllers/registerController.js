const { RegisterService } = require('../services');

const getRegisterById = async (req, res) => {
  const courseId = req.params.CourseId;
  try {
    const register = await RegisterService.getRegisters(courseId);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRegisterById,
};
