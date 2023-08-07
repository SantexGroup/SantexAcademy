// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('roles', {
    id_rol: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre_rol: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_rol' },
        ],
      },
    ],
  });
};
