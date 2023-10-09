const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TareasVoluntario extends Model { }
  TareasVoluntario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      asistio: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'tareasVoluntario',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  return TareasVoluntario;
};
