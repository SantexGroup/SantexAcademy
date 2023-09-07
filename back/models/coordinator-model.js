const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coordinator extends Model { }
  Coordinator.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      modelName: 'coordinator',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  Coordinator.associate = (models) => {
    Coordinator.hasMany(models.tarea);
  };
  return Coordinator;
};
