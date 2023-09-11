const { User } = require('../models');

const findUserByEmail = async (email) => {
  const { dataValues } = await User.findOne({ where: { email } });

  return dataValues;
};
module.exports = findUserByEmail;
