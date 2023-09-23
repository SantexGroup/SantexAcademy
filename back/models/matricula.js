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
      models.Matricula.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'User'
      });

      models.Matricula.belongsTo(models.Curso, {
        foreignKey: 'cursoId',
        targetKey: 'id',
        as: 'Curso'
      });
    }
  }
  Matricula.init({
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    habilitado: {
      type: DataTypes.BOOLEAN,
      defaultValue: 'A',
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: 'A',
    },
  }, {
    sequelize,
    modelName: 'Matricula',
  });
  return Matricula;
};
