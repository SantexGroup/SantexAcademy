const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Password extends Model {
    static associate() {
      // define association here
    }
  }
  Password.init({
    password: DataTypes.STRING,
    limit_time: DataTypes.DATE,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'password',
  });
  return Password;
};
