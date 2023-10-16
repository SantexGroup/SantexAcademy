// Creacion del modelo de dispositivo electronico

const { Model } = require('sequelize');
// const ModeloBase = require('./modelBase');
const DescripcionDispositivo = require('./descripcionDispositivoModel');
const EstadoDispositivo = require('./estadoDispositivoModel');

module.exports = (sequelize, DataTypes) => {
  //  class Usuario extends ModeloBase {
  class DispositivoElectronico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      DispositivoElectronico.belongsTo(models.DescripcionDispositivo, {
        foreignKey: 'id_descripcion_dispositivo',
      });

      DispositivoElectronico.belongsTo(models.EstadoDispositivo, {
        foreignKey: 'id_estado_dispositivo',
      });
    }
  }

  // Inicializar la clase base
  // super.initModeloBase(sequelize);

  DispositivoElectronico.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      descripcion: DataTypes.STRING,

      // abreviatura: 'xxx' o 'xxxxx',

      cantidad: DataTypes.INTEGER,

      fecha_adquisicion: DataTypes.DATE,

      id_descripcion_dispositivo: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: DescripcionDispositivo,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      descripcion_dispositivo: DataTypes.STRING,

      id_estado_dispositivo: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: EstadoDispositivo,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      estado_dispositivo: DataTypes.STRING,

      activo: DataTypes.INTEGER,

      creado_por: DataTypes.STRING,

      fecha_creacion: DataTypes.DATE,

      modificado_por: DataTypes.STRING,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'DispositivoElectronico',
    },
  );

  return DispositivoElectronico;
};
