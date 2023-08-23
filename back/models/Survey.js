const { Model, DataTypes } = require('sequelize');

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
      surveyorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Survey',
    },
  );

  Survey.associate = (models) => {
    Survey.belongsTo(models.User, {
      foreignKey: 'surveyorId',
    });
  };
  return Survey;
};
