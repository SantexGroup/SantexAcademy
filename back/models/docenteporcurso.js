'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocentePorCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
         // Asociación entre DocentePorCurso y docente
         DocentePorCurso.belongsTo(models.Docente, {
          foreignKey: 'iddocente',
          targetKey: 'id',
          as: 'DocenteEnDocentePorCurso'
        });
  
        // Asociación entre DocentePorCurso y curso
        DocentePorCurso.belongsTo(models.Curso, {
          foreignKey: 'idcurso',
          targetKey: 'id',
          as: 'CursoEnDocentePorCurso'
        });
    }
  }
  DocentePorCurso.init({
    iddocente: DataTypes.INTEGER,
    idcurso: DataTypes.INTEGER,
    habilitado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocentePorCurso',
  });
  return DocentePorCurso;
};