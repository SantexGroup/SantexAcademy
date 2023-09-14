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
<<<<<<< HEAD
      Curso.belongsTo(models.Nivel, {
        foreignKey: 'idnivel',
        as: 'nivel',
=======
      // define association here
      models.Curso.hasMany(models.Matricula, {
        foreignKey: 'cursoId',
        sourceKey: 'id',
      });
      models.Curso.belongsTo(models.Nivel, {
        foreignKey: 'idnivel',
        target: 'id',
>>>>>>> juanjoDiaz
      });
    }
  }
  Curso.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
<<<<<<< HEAD
    idnivel: DataTypes.INTEGER,
=======
    idnivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idnivel',
    },
>>>>>>> juanjoDiaz
    requisitos: DataTypes.TEXT,
    habilitado: DataTypes.BOOLEAN,
    fechainicio: DataTypes.DATE,
    fechafin: DataTypes.DATE,
    idusuarioalta: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    idusuariomodificacion: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};
