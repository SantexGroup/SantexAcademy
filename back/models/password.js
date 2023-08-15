const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class password extends Model {
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
