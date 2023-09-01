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
    static associate() {
      // define association here
    }
  }
  courseDetail.init({
    title: DataTypes.STRING,
    paragraph1: DataTypes.STRING,
    paragraph2: DataTypes.STRING,
    image1url: DataTypes.STRING,
    image2url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'courseDetail',
  });
  return courseDetail;
};
