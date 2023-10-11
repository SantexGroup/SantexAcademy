const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Registered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Registered.belongsTo(models.Course, {
        foreignKey: 'idCourse',
      });
      Registered.belongsTo(models.User, {
        foreignKey: 'idUser',
      });
    }
  }
  Registered.init({
    idCourse: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Registered',
  });
  return Registered;
};
