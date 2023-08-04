module.exports = function (sequelize, DataTypes) {
  return sequelize.define('carrito_recompensa', {
    id_carrito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: 'name_UNIQUE',
    },
  }, {
    sequelize,
    tableName: 'carritoRecompensa',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id_carrito' },
        ],
      },
      {
        name: 'name_UNIQUE',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'name' },
        ],
      },
    ],
  });
};
