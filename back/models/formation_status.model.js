const {
  Model,
} = require('sequelize');

const { FORMATIONS_STATUS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class FormationStatus extends Model {
  }
  FormationStatus.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: FORMATIONS_STATUS_TABLE_NAME,
  });
  return FormationStatus;
};
