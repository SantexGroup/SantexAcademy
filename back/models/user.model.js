const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

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

    async save() {
      // Encripta la contraseña antes de ser guardada.
      // Utiliza bcrypt, para generar el hash de la contraseña
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);

      await super.save();
      return this;
    }

    /**
     * Verifica si una contraseña coincide con la contrase a encriptada.
     * Utiliza bcrypt.compare(), para comparar las contraseñas
     *
     * @param {string} password - Contraseña a verificar
     *
     * @returns {boolean} Si las contraseñas coinciden o no.
     */
    async checkPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
  User.init(
    {
      rolesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: 'roles_id',
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
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: false,
      tableName: USERS_TABLE_NAME,
    },
  );
  return User;
};
