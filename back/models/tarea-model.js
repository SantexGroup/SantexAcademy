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
      coordinatorId: {
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
      categoryId: {
        type: DataTypes.INTEGER,
      },
      cantParticipantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      cantInscriptos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      estado: {
        type: DataTypes.ENUM('activa', 'finalizada'),
        defaultValue: 'activa',
        allowNull: true,
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
    Tarea.belongsTo(models.category);
    Tarea.belongsTo(models.coordinator);
  };
  return Tarea;
};
