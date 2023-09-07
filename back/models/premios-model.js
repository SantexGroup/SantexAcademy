const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class premios extends Model {}
  premios.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      

    }, {
      sequelize,
      modelName: 'premios',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  premios.associate = (models) => {
    premios.belongsToMany(models.volunteer, { through: models.premios_mid });
  };
  
  return premios;
};

