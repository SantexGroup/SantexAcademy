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
    // define association here
      User.belongsTo(models.TipoDeUsuario, {
        foreignKey: 'idtipodeusuario',
        as: 'tipodeusuario', // Esto define el nombre de la propiedad en User
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    activoactualmente: DataTypes.BOOLEAN,
    estado: DataTypes.STRING,
    idtipodeusuario: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
