// Creacion del modelo de usuario

const { Model } = require('sequelize');
// const ModeloBase = require('./modelBase');
const Rol = require('./rolModel');

module.exports = (sequelize, DataTypes) => {
  //  class Usuario extends ModeloBase {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Rol, { foreignKey: 'id_rol' });
    }
  }

  // Inicializar la clase base
  // super.initModeloBase(sequelize);

  Usuario.init(
    {
      // id:  DataTypes.INTEGER,
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        // autoIncrement: true,
      },

      nombre: DataTypes.STRING,

      contrasenia: DataTypes.STRING,

      email: DataTypes.STRING,

      id_rol: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: Rol,

          // This is the column name of the referenced model
          key: 'id',
        },
      },

      descripcion_rol: DataTypes.STRING,

      activo: DataTypes.INTEGER,

      fecha_creacion: DataTypes.DATE,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Usuario',
    },
  );

  return Usuario;
};
