const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  admin.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    email: DataTypes.STRING,
    password_id: DataTypes.INTEGER,
    poll_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};
