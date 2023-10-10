const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      details: DataTypes.STRING,
      photo: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      category: DataTypes.ENUM('empresarial', 'gala', 'familiar'),
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
