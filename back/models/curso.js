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
      models.Curso.belongsTo(models.Nivel, {
        foreignKey: 'idnivel',
        targetKey: 'id', // Esto debe ser la clave primaria del modelo Nivel
      });
      models.Curso.belongsToMany(models.User, {
        through: models.Matricula,
        foreignKey: 'cursoId',
        otherKey: 'userId',
      });
    }
  }
  Curso.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
    idnivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idnivel',
    },
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
