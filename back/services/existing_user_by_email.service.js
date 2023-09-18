const { User } = require('../models');

const existingUserByEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
  console.log({ result });
  return result;
};
module.exports = existingUserByEmail;
