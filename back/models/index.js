const Catalogo = require('./Catalogo');
const Carrito = require('./Carrito');
const Organizacion = require('./Organizacion');
const Recompensa = require('./Recompensa');
const Roles = require('./Roles');
const Usuario = require('./Usuario');
const Vacante = require('./Vacante');

// relations
Usuario.hasMany(Carrito);
Carrito.belongsTo(Usuario);

Carrito.belongsToMany(Recompensa, {
  through: 'RecompensaEnCarrito',
});
Recompensa.belongsToMany(Carrito, {
  through: 'RecompensaEnCarrito',
});

Usuario.belongsTo(Roles);
Roles.hasMany(Usuario);

Recompensa.belongsTo(Catalogo);
Catalogo.hasMany(Recompensa);

Usuario.belongsToMany(Vacante, {
  through: 'UsuarioEnVacante',
});
Vacante.belongsToMany(Usuario, {
  through: 'UsuarioEnVacante',
});

Vacante.belongsTo(Organizacion);
Organizacion.hasMany(Vacante);

// exports
module.exports = {
  Catalogo,
  Carrito,
  Organizacion,
  Recompensa,
  Roles,
  Usuario,
  Vacante,
};
