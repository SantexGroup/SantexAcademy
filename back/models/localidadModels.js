// Creacion del modelo de localidad

const { Model } = require('sequelize');
// const ModeloBase = require('./modelBase');

module.exports = (sequelize, DataTypes) => {
  // class Roles extends ModeloBase {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // static associate(models) {
    static associate() {
      // define association here
    }
  }

  // Inicializar la clase base (ModeloBase)
  // super.initModeloBase(sequelize);

  Localidad.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        // autoIncrement: true,
      },

      nombre: DataTypes.STRING,

      // abreviatura: 'xxx' o 'xxxxx',

      activo: DataTypes.INTEGER,

      por_defecto: DataTypes.INTEGER,

      // orden: DataTypes.INTEGER,

      creado_por: DataTypes.STRING,

      fecha_creacion: DataTypes.DATE,

      modificado_por: DataTypes.STRING,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Localidad',
    },
  );

  return Localidad;
};
