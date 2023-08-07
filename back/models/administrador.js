module.exports = function (sequelize, DataTypes) {
  return sequelize.define('administrador', {
    id_administrador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: 'administrador',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_administrador' },
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
