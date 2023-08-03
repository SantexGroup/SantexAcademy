const {
  Model,
} = require('sequelize');

const { FORMATIONS_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class FormationType extends Model {
  }
  FormationType.init({
    type: DataTypes.STRING, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: FORMATIONS_TYPES_TABLE_NAME,
  });
  return FormationType;
};
