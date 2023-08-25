const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class courseDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      courseDetail.hasMany(models.Course, {
        foreignKey: 'idcoursedetail',
      });
    }
  }
  courseDetail.init({
    paragraph1: DataTypes.STRING,
    paragraph2: DataTypes.STRING,
    image1url: DataTypes.STRING,
    image2ur2: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'courseDetail',
  });
  return courseDetail;
};
