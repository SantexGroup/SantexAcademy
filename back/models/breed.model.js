const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class breed extends Model {
    static associate(models) {
      this.hasMany(models.pet);
    }
  }
  breed.init(
    {
      id: {
        type: DataTypes.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      dangerous: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'breed',
    },
  );
  return breed;
};
