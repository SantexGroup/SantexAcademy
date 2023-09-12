const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Volunteer extends Model { }
  Volunteer.init(
    {
      id: {
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
      modelName: 'volunteer',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  Volunteer.associate = (models) => {
    Volunteer.belongsToMany(models.premios, { through: models.premios_mid });
    Volunteer.belongsToMany(models.tarea, { through: models.tareasVoluntario });
  };

  return Volunteer;
};
