const {
  Model,
} = require('sequelize');

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
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    cel: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
