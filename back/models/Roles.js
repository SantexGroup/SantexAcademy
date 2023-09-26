const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Roles = sequelize.define(
  "roles",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "roles",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
    ],
  }
);

Roles.bulkCreateDefaultRoles = async () => {
  try {
    // Verificar si ya existen roles en la base de datos
    const existingRoles = await Roles.findAll();

    // Si no hay roles existentes, entonces crea los roles predeterminados
    if (existingRoles.length === 0) {
      const rolesData = [{ name: "Voluntario" }, { name: "Administrador" }];
      await Roles.bulkCreate(rolesData);
      console.log("Roles predeterminados creados con éxito.");
    } else {
      console.log("Los roles ya existen en la base de datos");
    }
  } catch (error) {
    console.error("Error al crear roles predeterminados:", error);
  }
};


module.exports = Roles;
