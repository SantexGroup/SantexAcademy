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
    static associate(models) {
<<<<<<< HEAD
    // define association here
      User.belongsTo(models.TipoDeUsuario, {
        foreignKey: 'idtipodeusuario',
        as: 'tipodeusuario', // Esto define el nombre de la propiedad en User
=======
      // define association here
      models.User.hasMany(models.Matricula, {
        foreignKey: 'userId',
        sourceKey: 'id',
>>>>>>> juanjoDiaz
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
<<<<<<< HEAD
=======
    idtipodeusuario: DataTypes.INTEGER,
    codeRegister: DataTypes.STRING,
    verificationCode: DataTypes.BOOLEAN,
>>>>>>> juanjoDiaz
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
