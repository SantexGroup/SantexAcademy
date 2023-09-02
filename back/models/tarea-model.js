const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
  }
  Tarea.init(
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
      points: {
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
      modelName: 'tarea',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  Tarea.associate = (models) => {
    Tarea.belongsToMany(models.volunteer, { through: models.tareasVoluntario });
    Tarea.belongsTo(models.category, { foreignKey: 'id_category' });
    Tarea.belongsTo(models.coordinator, { foreignKey: 'id_coordinator' });
  };
  return Tarea;
};
