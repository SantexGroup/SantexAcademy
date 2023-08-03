const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      Attendance.belongsTo(models.User, { foreignKey: 'userId' });
      Attendance.belongsTo(models.Clase, { foreignKey: 'claseId' });

      // PROBANDO:
      Attendance.belongsTo(models.Course, { foreignKey: 'courseId' });
    }
  }
  Attendance.init(
    {
      date: DataTypes.DATE,
      status: DataTypes.ENUM('presente', 'ausente'),
    },
    {
      sequelize,
      modelName: 'Attendance',
    },
  );
  return Attendance;
};
