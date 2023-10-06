const Organizacion = require('./Organizacion');
const Producto = require('./Producto');
const OrdenDeCanje = require('./OrdenDeCanje');
const Roles = require('./Roles');
const RecoveryToken = require('./RecoveryToken');
const Testimonios = require('./Testimonios');
const Usuario = require('./Usuario');
const UsuarioEnVoluntariado = require('./UsuarioEnVoluntariado');
const Voluntariado = require('./Voluntariado');

// Relaciones


Usuario.hasMany(RecoveryToken, {
  foreignKey: 'userId',
});

RecoveryToken.belongsTo(Usuario, {
  foreignKey: 'userId',
});

Organizacion.hasMany(RecoveryToken, {
  foreignKey: 'orgId',
});

RecoveryToken.belongsTo(Organizacion, {
  foreignKey: 'orgId',
});

Usuario.hasOne(Testimonios, {
  foreignKey: 'userId',
  as: 'testimonio',
});

Testimonios.belongsTo(Usuario, {
  foreignKey: 'userId',
  as: 'usuario',
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

Voluntariado.belongsTo(Organizacion, {
  as: 'organization',
  foreignKey: 'organizationId',
});
Organizacion.hasMany(Voluntariado, {
  as: 'voluntariados',
  foreignKey: 'organizationId',
});
OrdenDeCanje.belongsTo(Producto, {
  as: 'producto',
  foreignKey: 'productId',
});
Producto.hasMany(OrdenDeCanje, {
  as: 'OrdenDeCanje',
  foreignKey: 'productId',
});
Usuario.belongsTo(Roles, { as: 'role', foreignKey: 'rolesId' });
Roles.hasMany(Usuario, { as: 'usuarios', foreignKey: 'rolesId' });


UsuarioEnVoluntariado.belongsTo(Usuario, {
  as: 'usuario',
  foreignKey: 'userId', 
});

Producto.belongsToMany(Usuario, {
  through: OrdenDeCanje,
  as: 'usuarios',
  foreignKey: 'productId',
});
Usuario.belongsToMany(Producto, {
  through: OrdenDeCanje,
  as: 'productos',
  foreignKey: 'userId',
});

Usuario.hasMany(OrdenDeCanje, {
  as: 'ordenes',
  foreignKey: 'userId',
});
OrdenDeCanje.belongsTo(Usuario, {
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
  OrdenDeCanje,
  Roles,
  RecoveryToken,
  Testimonios,
  Usuario,
  UsuarioEnVoluntariado,
  Voluntariado,
};
