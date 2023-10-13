const { RegisterProvider } = require('../providers');

const getRegisters = async (courseId) => RegisterProvider.getRegisters(courseId);

module.exports = {
  getRegisters,
};
