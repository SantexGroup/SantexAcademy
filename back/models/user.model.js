const {
  Model,
} = require('sequelize');

const { USERS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Profile, { foreignKey: 'user_id' });
      models.User.hasOne(models.Rol, { foreignKey: 'id' });
    }
  }
  User.init({
    roles_id: DataTypes.INTEGER, /* Not Null, Unique */
    nick: DataTypes.STRING, /* Not Null */
    password: DataTypes.STRING, /* Not Null */
    name: DataTypes.STRING, /* Not Null */
    lastName: DataTypes.STRING, /* Not Null */
    phone: DataTypes.STRING,
    email: DataTypes.STRING, /* Not Null, Unique */
    pictureLink: DataTypes.STRING,
    deleted: DataTypes.INTEGER, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: USERS_TABLE_NAME,
  });
  return User;
};
