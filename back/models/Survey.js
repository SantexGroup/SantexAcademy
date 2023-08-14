const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Survey extends Model {}

  Survey.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      questions: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Survey",
    },
  );
  return Survey;
};
