const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tareas extends Model {}
  tareas.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_coordinator: {
        type: DataTypes.INTEGER,
      },
      id_volunteer: {
        type: DataTypes.INTEGER,
      },
      point: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_category: {
        type: DataTypes.INTEGER,
      },
      cant_participantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'tareas',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  return tareas;
};
