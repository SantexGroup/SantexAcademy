const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Especialidad extends Model {
    static associate(models) {
      // define association here
      models.Especialidad.hasMany(models.Docente, {
        foreignKey: 'idespecialidad',
        sourceKey: 'id',
      });
    }
  }
  Especialidad.init({
    nombre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Especialidad',
  });
  return Especialidad;
};
