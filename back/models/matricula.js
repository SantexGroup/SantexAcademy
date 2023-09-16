const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Matricula.belongsTo(models.User, {
        foreignKey: 'userId',
        target: 'id',
      });
      models.Matricula.belongsTo(models.Curso, {
        foreignKey: 'cursoId',
        target: 'id',
      });
    }
  }
  Matricula.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
    },
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cursoId',
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: 'pendiente',
    },
  }, {
    sequelize,
    modelName: 'Matricula',
  });
  return Matricula;
};
