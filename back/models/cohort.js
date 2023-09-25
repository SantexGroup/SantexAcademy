const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cohort extends Model {
    static associate(models) {
      this.belongsToMany(models.Student, {
        through: 'CohortStudents',
        foreignKey: 'cohortId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      this.belongsTo(models.Course, {
        foreignKey: 'courseId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      this.belongsTo(models.Teacher, {
        foreignKey: 'teacherId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }

  Cohort.init({
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    finishDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    countStudents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cohort',
  });

  return Cohort;
};
