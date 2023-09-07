const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class category extends Model { }
  category.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntosPorHora: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'category',
    timestamps: false,
    underscored: false,
    createdAt: false,
    updatedAt: false,
  });
  category.associate = (models) => {
    category.hasMany(models.tarea);
  };
  return category;
};
