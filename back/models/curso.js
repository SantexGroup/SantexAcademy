const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Curso.hasMany(models.Matricula, {
        foreignKey: 'cursoId',
        sourceKey: 'id',
      });
    }
  }
  Curso.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
    idnivel: DataTypes.STRING,
    requisitos: DataTypes.TEXT,
    habilitado: DataTypes.BOOLEAN,
    fechaInicio: DataTypes.DATE,
    fechafin: DataTypes.DATE,
    idusuarioalta: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
    idusuariomodificacion: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Curso',
  });
  return Curso;
};
