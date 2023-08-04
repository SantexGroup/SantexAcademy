// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('visitante', {
    id_visitante: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre_rol: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id_rol',
      },
    },
  }, {
    sequelize,
    tableName: 'visitante',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_visitante' },
        ],
      },
      {
        name: 'id_rol',
        using: 'BTREE',
        fields: [
          { name: 'id_rol' },
        ],
      },
    ],
  });
};
