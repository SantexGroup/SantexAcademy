const {Catalogo} = require('../models');
const { sequelize } = require("../config/db-config");



const getCatalog = async () => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["deletedAt"] },
      });
      return users;
    } catch (error) {
      console.error("The users could not be listed due to an error.", error);
      throw error;
    }
  };

  module.exports = { getCatalog}