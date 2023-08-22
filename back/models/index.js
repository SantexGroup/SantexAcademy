const Catalogo = require('./Catalogo');
const CestaRecompensas = require('./CestaRecompensas');
const Organizacion = require('./Organizacion');
const Producto = require('./Producto');
const Roles = require('./Roles');
const Usuario = require('./Usuario');
const Voluntariado = require('./Voluntariado');

// relations
Usuario.hasMany(CestaRecompensas);
CestaRecompensas.belongsTo(Usuario);

CestaRecompensas.belongsToMany(Producto, {
  through: 'ProductoEnCestaRecompensas',
});
Producto.belongsToMany(CestaRecompensas, {
  through: 'ProductoEnCestaRecompensas',
});

Usuario.belongsTo(Roles);
Roles.hasMany(Usuario);

Producto.belongsTo(Catalogo);
Catalogo.hasMany(Producto);

Usuario.belongsToMany(Voluntariado, {
  through: 'UsuarioEnVoluntariado',
});
Voluntariado.belongsToMany(Usuario, {
  through: 'UsuarioEnVoluntariado',
});

Voluntariado.belongsTo(Organizacion);
Organizacion.hasMany(Voluntariado);

// exports
module.exports = {
  Catalogo,
  CestaRecompensas,
  Organizacion,
  Producto,
  Roles,
  Usuario,
  Voluntariado,
};
