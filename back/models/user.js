const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  User.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    nombreCompleto: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    genero: DataTypes.STRING,
    correoElectronico: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    contraseña: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};