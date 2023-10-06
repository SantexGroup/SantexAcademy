const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model { }
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      points: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      modelName: 'usuario',
      timestamps: false,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  Usuario.associate = (models) => {
    Usuario.belongsToMany(models.premio, { through: models.premiosMid });
    Usuario.belongsToMany(models.tarea, { through: models.tareasVoluntario });
    Usuario.belongsToMany(models.rol, { through: models.usuarioRol });
    Usuario.hasMany(models.tarea);
  };

  return Usuario;
};
