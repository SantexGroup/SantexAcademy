const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  User.init({
    idDireccion: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    estadoDeVendedor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    alias: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};
