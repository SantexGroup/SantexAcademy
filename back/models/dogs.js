const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {
    static associate(models) {
      dogs.hasOne(models.Razas, { foreignKey: 'id', targetKey: 'idRaza' });
      dogs.belongsTo(models.user, { foreignKey: 'id_User', targetKey: 'id' });
      models.Razas.belongsTo(dogs);
    }
  }
  dogs.init({
    nombreDog: DataTypes.STRING,
    idRaza: DataTypes.TINYINT,
    sexo: DataTypes.TINYINT,
    fechaNacimiento: DataTypes.DATE,
    id_User: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize,
    modelName: 'dogs',
  });
  return dogs;
};
