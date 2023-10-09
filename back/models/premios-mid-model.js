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
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'premiosMid',
      timestamps: false,
    },
  );
  return premiosMid;
};
