const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Volunteer extends Model {}

  Volunteer.init(
    {
      id_volunteer: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.BIGINT,
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
      points: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Volunteer',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  return Volunteer;
};
