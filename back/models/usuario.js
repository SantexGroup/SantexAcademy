// const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: 'username_UNIQUE',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: 'email_UNIQUE',
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    reputation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carritoRecompensa_id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carritoRecompensa',
        key: 'id_carrito',
      },
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id_rol',
      },
      unique: 'fk_usuario_roles',
    },
    recompensas_acumuladas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'idUsuario' },
          { name: 'carritoRecompensa_id_carrito' },
        ],
      },
      {
        name: 'username_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'username' },
        ],
      },
      {
        name: 'email_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' },
        ],
      },
      {
        name: 'id_rol_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_rol' },
        ],
      },
      {
        name: 'fk_usuario_carritoRecompensa1_idx',
        using: 'BTREE',
        fields: [
          { name: 'carritoRecompensa_id_carrito' },
        ],
      },
    ],
  });
};
