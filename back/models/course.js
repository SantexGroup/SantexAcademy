const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.courseDetail, {
        foreignKey: 'id',
        target_Key: 'idcourseDetail',
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    start_date: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    due: DataTypes.INTEGER,
    has_surcharge: DataTypes.BOOLEAN,
    surcharge_percentage: DataTypes.INTEGER,
    idcourseDetail: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
