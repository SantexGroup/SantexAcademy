const {
    Model,
  } = require('sequelize');
  
module.exports = (sequelize, DataTypes) => {
  class CursadoPorAlumno extends Model {
        static associate(models) {

        }
    }
    CursadoPorAlumno.init({
   
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      },
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
      courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
      notas: {
      type: DataTypes.TEXT,
      defaultValue: JSON.stringify([]),
      },
      notaFinal: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      },
      asistencia: {
      type: DataTypes.TEXT,
      },
      condAsistencia: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      },
      createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      },
      updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      },
  
    }, {
    sequelize,
    modelName: 'CursadoPorAlumno',
    });
    return CursadoPorAlumno;
};

