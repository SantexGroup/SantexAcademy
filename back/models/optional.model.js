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
      // define association here
      models.Optional.belongsTo(models.Marital, { foreignKey: 'marital_id' });
      models.Optional.belongsTo(models.Sex, { foreignKey: 'sexs_id' });
      models.Optional.belongsTo(models.Country, { foreignKey: 'countries_id' });
    }
  }
  Optional.init({
    marital_id: DataTypes.INTEGER,
    sexs_id: DataTypes.INTEGER,
    countries_id: DataTypes.INTEGER,
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
    tableName: OPTIONALS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Optional;
};
