const {
  Model,
} = require('sequelize');
const Alquiler = require('./alquiler');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsToMany(models.Alquiler, { through: "AlquilerProducto", foreignKey: "ProductId" });
      Products.belongsToMany(models.Categories, { through: "ProductsCategories", foreignKey: "ProductId" });
    }

    //dependiendo los alquileres con sus fechas podemos ver caunto stock hay para esos dias, si hay 0 no es posible alquilar nigun producto para ese dia 
  }

    
  

  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,//cantidad total de productos
    //stock: DataTypes.INTEGER, //cantidad de productos disponibles para alquiler todavia no se us
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  
  return Products;
};
