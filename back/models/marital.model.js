const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Marital extends Model {
  }
  Marital.init({
    condition: DataTypes.STRING,
  }, {
    sequelize,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return Marital;
};
