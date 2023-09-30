'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docente extends Model {
    static associate(models) {
      // Asociación entre Docente y User
      Docente.belongsTo(models.User, {
        foreignKey: 'idusuario',
        targetKey: 'id',
        as: 'UserDocente'
      });

      // Asociación entre Docente y especialidad
      Docente.belongsTo(models.Especialidad, {
        foreignKey: 'idespecialidad',
        targetKey: 'id',
        as: 'Especialidad'
      });
    }
  }
  Docente.init({
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idusuario',
    },
    idespecialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idespecialidad',
    },
    habilitado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Docente',
  });
  return Docente;
};
