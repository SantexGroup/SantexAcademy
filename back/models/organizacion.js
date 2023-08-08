module.exports = function (sequelize, DataTypes) {
  return sequelize.define('organizacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'nombre_UNIQUE',
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: 'email_UNIQUE',
    },
    telefono: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: 'telefono_UNIQUE',
    },
    cuit: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: 'cuit_UNIQUE',
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'organizacion',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
      {
        name: 'nombre_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'nombre' },
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
        name: 'cuit_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cuit' },
        ],
      },
      {
        name: 'telefono_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'telefono' },
        ],
      },
    ],
  });
};
