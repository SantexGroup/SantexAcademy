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
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nick: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pictureLink: DataTypes.STRING,
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: USERS_TABLE_NAME,
  });
  return User;
};
