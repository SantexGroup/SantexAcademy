const {
  Model,
} = require('sequelize');

const { FORMATIONS_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class FormationType extends Model {
  }
  FormationType.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    tableName: FORMATIONS_TYPES_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return FormationType;
};
