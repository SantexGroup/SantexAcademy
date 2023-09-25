// Creacion del modelo de descripcion de telefono

const { Model } = require('sequelize');
// const ModeloBase = require('./modelBase');

module.exports = (sequelize, DataTypes) => {
  // class Roles extends ModeloBase {
  class DescripcionTelefono extends Model {
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

  DescripcionTelefono.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        // autoIncrement: true,
      },

      descripcion: DataTypes.STRING,

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
      modelName: 'DescripcionTelefono',
    },
  );

  return DescripcionTelefono;
};
