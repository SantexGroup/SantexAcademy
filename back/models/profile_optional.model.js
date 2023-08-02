const {
  Model,
} = require('sequelize');

const { PROFILES_OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileOptional extends Model {
  }
  ProfileOptional.init({
    profiles_id: DataTypes.INTEGER,
    optionals_id: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_OPTIONALS_TABLE_NAME,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt', 'createdAt', 'updatedAt'],
      },
    },

  });
  return ProfileOptional;
};
