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

Roles.bulkCreateDefaultRoles = async () => {
  const rolesData = [
    { nombre: 'Visitante' },
    { nombre: 'Voluntario' },
    { nombre: 'Administrador' },
  ];

  await Roles.bulkCreate(rolesData);
};

module.exports = Roles;
