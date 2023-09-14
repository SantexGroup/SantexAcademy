const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nivel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
    // static associate(models) {
    // define association here
    // }
=======
    static associate(models) {
      // define association here
      models.Nivel.hasMany(models.Curso, {
        foreignKey: 'idnivel',
        sourceKey: 'id',
      });
    }
>>>>>>> juanjoDiaz
  }
  Nivel.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Nivel',
  });
  return Nivel;
};
