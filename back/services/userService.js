const userProvider = require('../providers/userProvider');

const createUser = async (user) => userProvider.createUser(user);

module.exports = { createUser };
