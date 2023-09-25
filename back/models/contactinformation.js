const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContactInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Student, {
        foreignKey: 'contactInformationId',
        sourceKey: 'id',
      });
      this.hasOne(models.Teacher, {
        foreignKey: 'contactInformationId',
        sourceKey: 'id',
      });
    }
  }
  ContactInformation.init({
    phone_number: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ContactInformation',
  });
  return ContactInformation;
};
