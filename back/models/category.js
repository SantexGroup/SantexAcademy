'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsToMany(models.Course, { as: 'courses', through: 'CourseCategories' });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};