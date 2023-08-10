const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coordinator extends Model {}
  Coordinator.init(
    {
      id_coordinator: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: 0,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Coordinator',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  return Coordinator;
};
