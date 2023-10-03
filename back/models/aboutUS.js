const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AboutUS extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate() {
      // define association here
    }
  }
  AboutUS.init({
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    title: { type: DataTypes.STRING, allowNull: true },
    subtitle: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    priority: { type: DataTypes.TINYINT, allowNull: true },
  }, {
    sequelize,
    modelName: 'AboutUS',
    tableName: 'AboutUS',
  });
  return AboutUS;
};
