// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('voluntariado', {
    id_voluntariado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    recompensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'voluntariado',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_voluntariado' },
        ],
      },
      {
        name: 'id_voluntariado_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_voluntariado' },
        ],
      },
    ],
  });
};
