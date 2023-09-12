const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class premiosMid extends Model {}

  premiosMid.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      /*id_volunteer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_premios: {
        type: DataTypes.INTEGER ,
        allowNull: false,
      },*/
      date: {
        type: DataTypes.DATEONLY ,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'premios_mid',
      timestamps: false,
    },
  );
  
  return premiosMid;
};
