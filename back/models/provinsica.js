// Creacion del modelo de provincia

const { Model } = require('sequelize');
//const ModeloBase = require('./modeloBase');

module.exports = (sequelize, DataTypes) => {
  //class Roles extends ModeloBase {
  class Provincia extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      static associate(models) {
      // define association here
    }
  }

  // Inicializar la clase base (ModeloBase)
  //super.initModeloBase(sequelize);

  Provincia.init({
    id:  DataTypes.INTEGER,

    // codigo_afip: DataTypes.INTEGER,

    // abreviatura: DataTypes.STRING,

    nombre: DataTypes.STRING,

    // prefijo_telefonico: DataTypes.INTEGER,

    activo: DataTypes.INTEGER,

    por_defecto: DataTypes.INTEGER,

    // orden: DataTypes.INTEGER,

    creado_por:  DataTypes.STRING,

    fecha_creacion: DataTypes.DATE,

    modificado_por:  DataTypes.STRING,

    fecha_modificacion: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Provincia',
  });

  return Provincia;
};