const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Surveyor extends Model {}

  Surveyor.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      status: {
        type: DataTypes.ENUM('activo', 'inactivo'),
        defaultValue: 'activo',
      },
    },
    {
      sequelize,
      modelName: 'Surveyor',
    },
  );

  Surveyor.associate = (models) => {
    Surveyor.hasMany(models.Survey, {
      foreignKey: 'surveyorId',
      as: 'surveys',
    });
  };

  return Surveyor;
};
