const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db-config');

const RecoveryToken = sequelize.define('recoveryToken', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuario', 
      key: 'id',
    },
  },
  orgId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'organizacion', 
    },
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = RecoveryToken;
