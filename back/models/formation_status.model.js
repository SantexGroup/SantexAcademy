const {
  Model,
} = require('sequelize');

const { FORMATIONS_STATUS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class FormationStatus extends Model {
  }
  FormationStatus.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    tableName: FORMATIONS_STATUS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },
  });
  return FormationStatus;
};
