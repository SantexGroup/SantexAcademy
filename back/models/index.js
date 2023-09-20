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
  foreignKey: 'basketRewardsId',
  onDelete: 'SET NULL',
});
CestaRecompensas.hasOne(Usuario, {
  as: 'usuario_cesto',
  foreignKey: 'basketRewardsId',
  onDelete: 'SET NULL',
});
CestaRecompensas.belongsToMany(Producto, {
  as: 'productoId_productos',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'basketRewardsId',
  otherKey: 'productoId',
});
CestaRecompensas.belongsToMany(Roles, {
  as: 'rolesId_roles',
  through: Usuario,
  foreignKey: 'basketRewardsId',
  otherKey: 'rolesId',
});
Producto.belongsToMany(CestaRecompensas, {
  as: 'basketRewardsId_cestaRecompensas',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'productoId',
  otherKey: 'basketRewardsId',
});
Roles.belongsToMany(CestaRecompensas, {
  as: 'basketRewardsId_cestaRecompensas_usuarios',
  through: Usuario,
  foreignKey: 'rolesId',
  otherKey: 'basketRewardsId',
});
Usuario.belongsToMany(Voluntariado, {
  as: 'voluntariadoId_voluntariados',
  through: UsuarioEnVoluntariado,
  foreignKey: 'userId',
  otherKey: 'volunteerId',
});
Voluntariado.belongsToMany(Usuario, {
  as: 'usuarioId_usuarios',
  through: UsuarioEnVoluntariado,
  foreignKey: 'volunteerId',
  otherKey: 'userId',
});
Producto.belongsTo(Catalogo, { as: 'catalogo', foreignKey: 'catalogoId' });
Catalogo.hasMany(Producto, { as: 'productos', foreignKey: 'catalogoId' });
ProductoEnCestaRecompensas.belongsTo(CestaRecompensas, {
  as: 'cestaRecompensa',
  foreignKey: 'basketRewardsId',
});
CestaRecompensas.hasMany(ProductoEnCestaRecompensas, {
  as: 'productoEnCestaRecompensas',
  foreignKey: 'basketRewardsId',
});

Voluntariado.belongsTo(Organizacion, {
  as: 'organization',
  foreignKey: 'organizationId',
});
Organizacion.hasMany(Voluntariado, {
  as: 'voluntariados',
  foreignKey: 'organizationId',
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
  foreignKey: 'userId',
});
Usuario.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'userId',
});
UsuarioEnVoluntariado.belongsTo(Voluntariado, {
  as: 'voluntariado',
  foreignKey: 'volunteerId',
});
Voluntariado.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'volunteerId',
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
