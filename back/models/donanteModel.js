// Creacion del modelo de donante

const { Model } = require('sequelize');
// const ModeloBase = require('./modelBase');
const DescripcionTelefono = require('./descripcionTelefonoModel');

module.exports = (sequelize, DataTypes) => {
  // class Donante extends Model {
  class Donante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Donante.belongsTo(models.DescripcionTelefono, {
        foreignKey: 'id_descripcion_telefono',
      });
    }
  }

  // Inicializar la clase base
  // super.initModeloBase(sequelize);

  Donante.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        // autoIncrement: true,
      },

      razon_social: DataTypes.STRING,

      email: DataTypes.STRING,

      calle: DataTypes.STRING,

      numero: DataTypes.STRING,

      piso: DataTypes.STRING,

      departamento: DataTypes.STRING,

      codigo_postal: DataTypes.STRING,

      id_descripcion_telefono: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: DescripcionTelefono,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      descripcion_telefono: DataTypes.STRING,

      activo: DataTypes.INTEGER,

      creado_por: DataTypes.STRING,

      fecha_creacion: DataTypes.DATE,

      modificado_por: DataTypes.STRING,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Donante',
    },
  );

  return Donante;
};
