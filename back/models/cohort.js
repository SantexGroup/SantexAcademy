const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cohort extends Model {
    static associate(models) {
      Cohort.belongsTo(models.Course, {
        foreignKey: 'courseId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Cohort.belongsTo(models.Student, {
        foreignKey: 'studentId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }

  Cohort.init({
    // ... otros campos
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cohort',
  });

  return Cohort;
};
