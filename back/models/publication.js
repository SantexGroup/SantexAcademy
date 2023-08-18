const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Publication.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Publication',
    createdAt: false,
    updatedAt: false,
  });
  return Publication;
};
