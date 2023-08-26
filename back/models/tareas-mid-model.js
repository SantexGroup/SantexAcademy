const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tareasMid extends Model {}

  tareasMid.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_volunteer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      asistencia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'tareas_mid',
      timestamps: false,
    },
  );

  return tareasMid;
};
