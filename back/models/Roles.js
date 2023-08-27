const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Roles = sequelize.define(
  'roles',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

Roles.initializeRoles = async () => {
  const roles = ['voluntario', 'admin'];
  const promises = roles.map((roleName) => Roles.findOrCreate({ where: { name: roleName } }));
  await Promise.all(promises);
};

module.exports = Roles;
