const Catalogo = require('./Catalogo');
const CestaRecompensas = require('./CestaRecompensas');
const Organizacion = require('./Organizacion');
const Producto = require('./Producto');
const ProductoEnCestaRecompensas = require('./ProductoEnCestaRecompensas');
const Roles = require('./Roles');
const Usuario = require('./Usuario');
const UsuarioEnVoluntariado = require('./UsuarioEnVoluntariado');
const Voluntariado = require('./Voluntariado');

// relations

Usuario.belongsTo(CestaRecompensas, {
  as: 'cestaRecompensa',
  foreignKey: 'cestaRecompensasId',
  onDelete: 'SET NULL',
});
CestaRecompensas.hasOne(Usuario, {
  as: 'usuario_cesto',
  foreignKey: 'cestaRecompensasId',
  // onDelete: "SET NULL",
});
CestaRecompensas.belongsToMany(Producto, {
  as: 'productoId_productos',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'cestaRecompensasId',
  otherKey: 'productoId',
});
CestaRecompensas.belongsToMany(Roles, {
  as: 'rolesId_roles',
  through: Usuario,
  foreignKey: 'cestaRecompensasId',
  otherKey: 'rolesId',
});
Producto.belongsToMany(CestaRecompensas, {
  as: 'cestaRecompensasId_cestaRecompensas',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'productoId',
  otherKey: 'cestaRecompensasId',
});
Roles.belongsToMany(CestaRecompensas, {
  as: 'cestaRecompensasId_cestaRecompensas_usuarios',
  through: Usuario,
  foreignKey: 'rolesId',
  otherKey: 'cestaRecompensasId',
});
Usuario.belongsToMany(Voluntariado, {
  as: 'voluntariadoId_voluntariados',
  through: UsuarioEnVoluntariado,
  foreignKey: 'usuarioId',
  otherKey: 'voluntariadoId',
});
Voluntariado.belongsToMany(Usuario, {
  as: 'usuarioId_usuarios',
  through: UsuarioEnVoluntariado,
  foreignKey: 'voluntariadoId',
  otherKey: 'usuarioId',
});
Producto.belongsTo(Catalogo, { as: 'catalogo', foreignKey: 'catalogoId' });
Catalogo.hasMany(Producto, { as: 'productos', foreignKey: 'catalogoId' });
ProductoEnCestaRecompensas.belongsTo(CestaRecompensas, {
  as: 'cestaRecompensa',
  foreignKey: 'cestaRecompensasId',
});
CestaRecompensas.hasMany(ProductoEnCestaRecompensas, {
  as: 'productoEnCestaRecompensas',
  foreignKey: 'cestaRecompensasId',
});

Voluntariado.belongsTo(Organizacion, {
  as: 'organizacion',
  foreignKey: 'organizacionId',
});
Organizacion.hasMany(Voluntariado, {
  as: 'voluntariados',
  foreignKey: 'organizacionId',
});
ProductoEnCestaRecompensas.belongsTo(Producto, {
  as: 'producto',
  foreignKey: 'productoId',
});
Producto.hasMany(ProductoEnCestaRecompensas, {
  as: 'productoEnCestaRecompensas',
  foreignKey: 'productoId',
});
Usuario.belongsTo(Roles, { as: 'role', foreignKey: 'rolesId' });
Roles.hasMany(Usuario, { as: 'usuarios', foreignKey: 'rolesId' });

UsuarioEnVoluntariado.belongsTo(Usuario, {
  as: 'usuario_test',
  foreignKey: 'usuarioId',
});
Usuario.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'usuarioId',
});
UsuarioEnVoluntariado.belongsTo(Voluntariado, {
  as: 'voluntariado',
  foreignKey: 'voluntariadoId',
});
Voluntariado.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'voluntariadoId',
});

// exports
module.exports = {
  Catalogo,
  CestaRecompensas,
  Organizacion,
  Producto,
  ProductoEnCestaRecompensas,
  Roles,
  Usuario,
  UsuarioEnVoluntariado,
  Voluntariado,
};
