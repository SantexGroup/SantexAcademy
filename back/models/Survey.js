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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('activo', 'eliminado', 'archivado'),
        defaultValue: 'activo',
      },
    },
    {
      sequelize,
      modelName: 'Survey',
    },
  );

  Survey.associate = (models) => {
    Survey.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Survey;
};
