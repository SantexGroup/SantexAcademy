// Creacion del modelo de donacion de dispositivo

const { Model } = require('sequelize');
// const ModeloBase = require('./modeloBase');
const Solicitud = require('./solicitudModel');
const DispositivoElectronico = require('./dispositivoElectronicoModel');

module.exports = (sequelize, DataTypes) => {
  //  class Usuario extends ModeloBase {
  class SolicitudDispositivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      SolicitudDispositivo.belongsTo(models.Solicitud, {
        foreignKey: 'id_solicitud',
      });

      SolicitudDispositivo.belongsTo(models.Solicitud, {
        foreignKey: 'id_dispositivo_electronico',
      });
    }
  }

  // Inicializar la clase base
  // super.initModeloBase(sequelize);

  SolicitudDispositivo.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },

      cantidad_solicitada: DataTypes.INTEGER,

      fecha_adquisicion: DataTypes.DATE,

      id_solicitud: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: Solicitud,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      descripcion_solicitud: DataTypes.STRING,

      id_dispositivo_electronico: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: DispositivoElectronico,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      descripcion_dispositivo_electronico: DataTypes.STRING,

      activo: DataTypes.INTEGER,

      creado_por: DataTypes.STRING,

      fecha_creacion: DataTypes.DATE,

      modificado_por: DataTypes.STRING,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'SolicitudDispositivo',
    },
  );

  return SolicitudDispositivo;
};
