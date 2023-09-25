const Catalogo = require('./Catalogo');
const CestaRecompensas = require('./CestaRecompensas');
const Organizacion = require('./Organizacion');
const Producto = require('./Producto');
const ProductoEnCestaRecompensas = require('./ProductoEnCestaRecompensas');
const Roles = require('./Roles');
const Usuario = require('./Usuario');
const UsuarioEnVoluntariado = require('./UsuarioEnVoluntariado');
const Voluntariado = require('./Voluntariado');

// Relaciones

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
  as: 'productos',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'basketRewardsId',
  otherKey: 'productoId',
});
CestaRecompensas.belongsToMany(Roles, {
  as: 'usuarios',
  through: Usuario,
  foreignKey: 'basketRewardsId',
  otherKey: 'rolesId',
});
Producto.belongsToMany(CestaRecompensas, {
  as: 'cestaRecompensas',
  through: ProductoEnCestaRecompensas,
  foreignKey: 'productoId',
  otherKey: 'basketRewardsId',
});
Roles.belongsToMany(CestaRecompensas, {
  as: 'cestaRecompensas_usuarios',
  through: Usuario,
  foreignKey: 'rolesId',
  otherKey: 'basketRewardsId',
});
Usuario.belongsToMany(Voluntariado, {
  as: 'voluntariados',
  through: UsuarioEnVoluntariado,
  foreignKey: 'userId',
  otherKey: 'idVolunteering',
});
Voluntariado.belongsToMany(Usuario, {
  as: 'usuarios',
  through: UsuarioEnVoluntariado,
  foreignKey: 'idVolunteering',
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
  as: 'usuario',
  foreignKey: 'userId', 
});



Usuario.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'userId',
});
UsuarioEnVoluntariado.belongsTo(Voluntariado, {
  as: 'voluntariado',
  foreignKey: 'idVolunteering',
});
Voluntariado.hasMany(UsuarioEnVoluntariado, {
  as: 'usuarioEnVoluntariados',
  foreignKey: 'idVolunteering',
});

// Exportar los modelos
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
