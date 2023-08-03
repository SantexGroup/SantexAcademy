const {
  Model,
} = require('sequelize');

const { REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Reference extends Model {
  }
  Reference.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    deleted: DataTypes.INTEGER, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: REFERENCES_TABLE_NAME,
  });
  return Reference;
};
