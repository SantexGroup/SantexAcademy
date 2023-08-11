const { User } = require("../models/index");

async function getAll() {
    const users = await User.findAll();
    return users;
};

module.exports = { getAll }