const Organizacion = require('./Organizacion');
const Producto = require('./Producto');
const OrdenRetiroProductos = require('./OrdenRetiroProductos');
const Roles = require('./Roles');
const Usuario = require('./Usuario');
const UsuarioEnVoluntariado = require('./UsuarioEnVoluntariado');
const Voluntariado = require('./Voluntariado');

// Relaciones


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

Voluntariado.belongsTo(Organizacion, {
  as: 'organization',
  foreignKey: 'organizationId',
});
Organizacion.hasMany(Voluntariado, {
  as: 'voluntariados',
  foreignKey: 'organizationId',
});
OrdenRetiroProductos.belongsTo(Producto, {
  as: 'producto',
  foreignKey: 'productId',
});
Producto.hasMany(OrdenRetiroProductos, {
  as: 'OrdenRetiroProductos',
  foreignKey: 'productId',
});
Usuario.belongsTo(Roles, { as: 'role', foreignKey: 'rolesId' });
Roles.hasMany(Usuario, { as: 'usuarios', foreignKey: 'rolesId' });


UsuarioEnVoluntariado.belongsTo(Usuario, {
  as: 'usuario',
  foreignKey: 'userId', 
});

Producto.belongsToMany(Usuario, {
  through: OrdenRetiroProductos,
  as: 'usuarios',
  foreignKey: 'productId',
});
Usuario.belongsToMany(Producto, {
  through: OrdenRetiroProductos,
  as: 'productos',
  foreignKey: 'userId',
});

Usuario.hasMany(OrdenRetiroProductos, {
  as: 'ordenes',
  foreignKey: 'userId',
});
OrdenRetiroProductos.belongsTo(Usuario, {
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
  Organizacion,
  Producto,
  OrdenRetiroProductos,
  Roles,
  Usuario,
  UsuarioEnVoluntariado,
  Voluntariado,
};
