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
    name: {
      type: DataTypes.STRING,
      len: [1, 30],
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        len: [1, 320], // 320 caracteres es el maximo apra un email
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
