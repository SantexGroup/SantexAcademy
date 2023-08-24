const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Teacher.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    celNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    specialty: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};
