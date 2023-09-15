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
      models.User.hasMany(models.Matricula, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      models.User.belongsTo(models.TipoDeUsuario, {
        foreignKey: 'idtipodeusuario',
        target: 'id',
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
    idtipodeusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idtipodeusuario',
    },
    verificationCode: DataTypes.BOOLEAN,
    estado: DataTypes.BOOLEAN,
    codeRegister: DataTypes.CHAR(16),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
