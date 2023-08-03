const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clase extends Model {
    static associate(models) {
      // define association here
      // Una clase pertenece a un solo curso
      Clase.belongsTo(models.Course, { foreignKey: 'courseId' });

      Clase.hasMany(models.Attendance, { foreignKey: 'claseId' });
    }
  }
  Clase.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    days: { // Lunes,martes....
      type: DataTypes.STRING,
      allowNull: false,
    },
    hour: {
      type: DataTypes.INTEGER,
    },

  }, {
    sequelize,
    modelName: 'Clase',
  });
  return Clase;
};
