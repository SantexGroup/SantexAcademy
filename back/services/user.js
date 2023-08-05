const userProvider = require('../providers/userProvider');

const getUser = async (id) =>
  // eslint-disable-next-line no-return-await, implicit-arrow-linebreak
  await userProvider.getUser(id);

module.exports = { getUser };
