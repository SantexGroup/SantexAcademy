const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  User.init({
    idDireccion: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    estadoDeVendedor: DataTypes.BOOLEAN,
    alias: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    //tableName: 'users'
  });
  return User;
};
