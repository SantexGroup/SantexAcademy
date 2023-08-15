const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  password.init({
    password: DataTypes.STRING,
    limit_time: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'password',
  });
  return password;
};
