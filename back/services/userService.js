const userProvider = require('../providers/userProvider');

const getUser = async (id) => userProvider.getUser(id);

const createUser = async (user) => userProvider.createUser(user);

module.exports = { getUser, createUser };
