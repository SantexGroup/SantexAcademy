const {
  Model,
} = require('sequelize');

const { PROFILES_OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileOptional extends Model {
  }
  ProfileOptional.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profilesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'profiles_id',
    },
    optionalsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'optionals_id',
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_OPTIONALS_TABLE_NAME,
  });
  return ProfileOptional;
};
