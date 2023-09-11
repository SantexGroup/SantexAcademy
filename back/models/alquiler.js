const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Alquiler.init({
    idProducto: DataTypes.INTEGER,
    idEstado: DataTypes.INTEGER,
    idComprador: DataTypes.INTEGER,
    modoEnvio: DataTypes.BOOLEAN,
    dias: DataTypes.INTEGER,
    formaPago: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Alquiler',
    tableName: 'alquilers',
  });
  return Alquiler;
};
