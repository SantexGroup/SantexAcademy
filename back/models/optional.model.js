const {
  Model,
} = require('sequelize');

const { OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Optional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Optional.belongsToMany(models.Profile, {
        through: models.ProfileOptional,
        foreignKey: 'optionals_id',
        otherKey: 'profiles_id',
      });
      models.Optional.belongsTo(models.Marital, { foreignKey: 'marital_id' });
      models.Optional.belongsTo(models.Sex, { foreignKey: 'sexs_id' });
      models.Optional.belongsTo(models.Country, { foreignKey: 'countries_id' });
    }
  }
  Optional.init({
    maritalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'marital_id',
    },
    sexsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sexs_id',
    },
    countriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'countries_id',
    },
    profile: DataTypes.STRING,
    webPage: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    hobbies: DataTypes.STRING,
    aptitudes: DataTypes.STRING,
    driverLicense: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    achievements: DataTypes.STRING,
    address: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    tableName: OPTIONALS_TABLE_NAME,
  });
  return Optional;
};
