'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrito.belongsTo(models.User)
       Carrito.belongsToMany(models.Products, {
        through: 'productosEnCarritos', // Nombre de la tabla intermedia
        foreignKey: 'idCarrito',   // Nombre de la clave foránea en la tabla intermedia
      });
      }
       
    
  }
  Carrito.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};