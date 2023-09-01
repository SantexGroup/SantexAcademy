const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ContactInformation, {
        foreignKey: 'id_contact_information',
        targetKey: 'id',
      });
      this.belongsTo(models.User, {
        foreignKey: 'id_user',
        targetKey: 'id',
      });
    }
  }
  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    document_number: DataTypes.INTEGER,
    id_cohort: DataTypes.INTEGER,
    id_contact_information: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    birth_date: DataTypes.DATE,
    situation: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
