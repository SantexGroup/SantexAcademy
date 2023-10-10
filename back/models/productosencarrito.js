'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productosEnCarrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productosEnCarrito.init({
    idCarrito: DataTypes.INTEGER,
    idObjeto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productosEnCarrito',
  });
  return productosEnCarrito;
};