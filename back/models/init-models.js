const { DataTypes } = require("sequelize");
const catalogo = require("./catalogo");
const cestaRecompensas = require("./cestaRecompensas");
const organizacion = require("./organizacion");
const producto = require("./producto");
const productoEnCestaRecompensas = require("./productoEnCestaRecompensas");
const roles = require("./roles");
const usuario = require("./usuario");
const usuarioEnVoluntariado = require("./usuarioEnVoluntariado");
const voluntariado = require("./voluntariado");

function initModels(sequelize) {
  const catalogoModel = catalogo(sequelize, DataTypes);
  const cestaRecompensasModel = cestaRecompensas(sequelize, DataTypes);
  const organizacionModel = organizacion(sequelize, DataTypes);
  const productoModel = producto(sequelize, DataTypes);
  const productoEnCestaRecompensasModel = productoEnCestaRecompensas(sequelize, DataTypes);
  const rolesModel = roles(sequelize, DataTypes);
  const usuarioModel = usuario(sequelize, DataTypes);
  const usuarioEnVoluntariadoModel = usuarioEnVoluntariado(sequelize, DataTypes);
  const voluntariadoModel = voluntariado(sequelize, DataTypes);
  cestaRecompensasModel.belongsToMany(productoModel, { as: 'productoId_productos', through: productoEnCestaRecompensasModel, foreignKey: "cestaRecompensasId", otherKey: "productoId" });
  cestaRecompensasModel.belongsToMany(rolesModel, { as: 'rolesId_roles', through: usuarioModel, foreignKey: "cestaRecompensasId", otherKey: "rolesId" });
  productoModel.belongsToMany(cestaRecompensasModel, { as: 'cestaRecompensasId_cestaRecompensas', through: productoEnCestaRecompensasModel, foreignKey: "productoId", otherKey: "cestaRecompensasId" });
  rolesModel.belongsToMany(cestaRecompensasModel, { as: 'cestaRecompensasId_cestaRecompensas_usuarios', through: usuarioModel, foreignKey: "rolesId", otherKey: "cestaRecompensasId" });
  usuarioModel.belongsToMany(voluntariadoModel, { as: 'voluntariadoId_voluntariados', through: usuarioEnVoluntariadoModel, foreignKey: "usuarioId", otherKey: "voluntariadoId" });
  voluntariadoModel.belongsToMany(usuarioModel, { as: 'usuarioId_usuarios', through: usuarioEnVoluntariadoModel, foreignKey: "voluntariadoId", otherKey: "usuarioId" });
  productoModel.belongsTo(catalogoModel, { as: "catalogo", foreignKey: "catalogoId"});
  catalogoModel.hasMany(productoModel, { as: "productos", foreignKey: "catalogoId"});
  productoEnCestaRecompensasModel.belongsTo(cestaRecompensasModel, { as: "cestaRecompensa", foreignKey: "cestaRecompensasId"});
  cestaRecompensasModel.hasMany(productoEnCestaRecompensasModel, { as: "productoEnCestaRecompensas", foreignKey: "cestaRecompensasId"});
  usuarioModel.belongsTo(cestaRecompensasModel, { as: "cestaRecompensa", foreignKey: "cestaRecompensasId"});
  cestaRecompensasModel.hasMany(usuarioModel, { as: "usuarios", foreignKey: "cestaRecompensasId"});
  voluntariadoModel.belongsTo(organizacionModel, { as: "organizacion", foreignKey: "organizacionId"});
  organizacionModel.hasMany(voluntariadoModel, { as: "voluntariados", foreignKey: "organizacionId"});
  productoEnCestaRecompensasModel.belongsTo(productoModel, { as: "producto", foreignKey: "productoId"});
  productoModel.hasMany(productoEnCestaRecompensasModel, { as: "productoEnCestaRecompensas", foreignKey: "productoId"});
  usuarioModel.belongsTo(rolesModel, { as: "role", foreignKey: "rolesId"});
  rolesModel.hasMany(usuarioModel, { as: "usuarios", foreignKey: "rolesId"});
  usuarioEnVoluntariadoModel.belongsTo(usuarioModel, { as: "usuario", foreignKey: "usuarioId"});
  usuarioModel.hasMany(usuarioEnVoluntariadoModel, { as: "usuarioEnVoluntariados", foreignKey: "usuarioId"});
  usuarioEnVoluntariadoModel.belongsTo(voluntariadoModel, { as: "voluntariado", foreignKey: "voluntariadoId"});
  voluntariadoModel.hasMany(usuarioEnVoluntariadoModel, { as: "usuarioEnVoluntariados", foreignKey: "voluntariadoId"});

  return {
    catalogo: catalogoModel,
    cestaRecompensas: cestaRecompensasModel,
    organizacion: organizacionModel,
    producto: productoModel,
    productoEnCestaRecompensas: productoEnCestaRecompensasModel,
    roles: rolesModel,
    usuario: usuarioModel,
    usuarioEnVoluntariado: usuarioEnVoluntariadoModel,
    voluntariado: voluntariadoModel,
  };
}
const initModelsExport = initModels;
module.exports = { initModels: initModelsExport };