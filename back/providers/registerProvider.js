const {
  User,
  Registered,
} = require('../models');

const getRegisters = async (courseId) => {
  try {
    const options = {
      where: { idCourse: courseId },
      include: [
        {
          model: User,
          attributes: ['firstname', 'lastname', 'email', 'phone'],
        },
      ],
    };
    const registers = await Registered.findAll(options);
    return registers;
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = {
  getRegisters,
};
