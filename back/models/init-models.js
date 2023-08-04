/* eslint-disable no-underscore-dangle */
const { DataTypes } = require('sequelize');
const _administrador = require('./administrador');
const _carritoRecompensa = require('./carritoRecompensa');
const _catalogoProductos = require('./catalogoProductos');
const _coordinador = require('./coordinador');
const _producto = require('./producto');
const _productoHasCarritoRecompensa = require('./productoHasCarritoRecompensa');
const _roles = require('./roles');
const _usuario = require('./usuario');
const _usuarioVoluntariado = require('./usuarioVoluntariado');
const _visitante = require('./visitante');
const _voluntariado = require('./voluntariado');
const _voluntario = require('./voluntario');

function initModels(sequelize) {
  const carritoRecompensa = _carritoRecompensa(sequelize, DataTypes);
  const administrador = _administrador(sequelize, DataTypes);
  const catalogoProductos = _catalogoProductos(sequelize, DataTypes);
  const coordinador = _coordinador(sequelize, DataTypes);
  const producto = _producto(sequelize, DataTypes);
  const productoHasCarritoRecompensa = _productoHasCarritoRecompensa(sequelize, DataTypes);
  const roles = _roles(sequelize, DataTypes);
  const usuario = _usuario(sequelize, DataTypes);
  const usuarioVoluntariado = _usuarioVoluntariado(sequelize, DataTypes);
  const visitante = _visitante(sequelize, DataTypes);
  const voluntariado = _voluntariado(sequelize, DataTypes);
  const voluntario = _voluntario(sequelize, DataTypes);

  usuario.belongsToMany(voluntariado, {
    as: 'voluntariadoIdVoluntariado_voluntariados', through: usuarioVoluntariado, foreignKey: 'usuario_idUsuario', otherKey: 'voluntariadoIdVoluntariado',
  });
  voluntariado.belongsToMany(usuario, {
    as: 'usuario_idUsuario_usuarios', through: usuarioVoluntariado, foreignKey: 'voluntariadoIdVoluntariado', otherKey: 'usuario_idUsuario',
  });
  productoHasCarritoRecompensa.belongsTo(carritoRecompensa, { as: 'carritoRecompensa_id_carrito_carritoRecompensa', foreignKey: 'carritoRecompensa_id_carrito' });
  carritoRecompensa.hasMany(productoHasCarritoRecompensa, { as: 'productoHasCarritoRecompensas', foreignKey: 'carritoRecompensa_id_carrito' });
  usuario.belongsTo(carritoRecompensa, { as: 'carritoRecompensa_id_carrito_carritoRecompensa', foreignKey: 'carritoRecompensa_id_carrito' });
  carritoRecompensa.hasMany(usuario, { as: 'usuarios', foreignKey: 'carritoRecompensa_id_carrito' });
  producto.belongsTo(catalogoProductos, { as: 'catalogo_Productos_id_catalogo_catalogo_Producto', foreignKey: 'catalogo_Productos_id_catalogo' });
  catalogoProductos.hasMany(producto, { as: 'productos', foreignKey: 'catalogo_Productos_id_catalogo' });
  productoHasCarritoRecompensa.belongsTo(producto, { as: 'producto_id_producto_producto', foreignKey: 'producto_id_producto' });
  producto.hasMany(productoHasCarritoRecompensa, { as: 'productoHasCarritoRecompensas', foreignKey: 'producto_id_producto' });
  productoHasCarritoRecompensa.belongsTo(producto, { as: 'producto_catalogoProductos_id_catalogo_producto', foreignKey: 'producto_catalogoProductos_id_catalogo' });
  producto.hasMany(productoHasCarritoRecompensa, { as: 'producto_catalogoProductos_id_catalogo_productoHasCarritoRecompensas', foreignKey: 'producto_catalogoProductos_id_catalogo' });
  administrador.belongsTo(roles, { as: 'id_rol_role', foreignKey: 'id_rol' });
  roles.hasMany(administrador, { as: 'administradors', foreignKey: 'id_rol' });
  coordinador.belongsTo(roles, { as: 'id_rol_role', foreignKey: 'id_rol' });
  roles.hasMany(coordinador, { as: 'coordinadors', foreignKey: 'id_rol' });
  usuario.belongsTo(roles, { as: 'id_rol_role', foreignKey: 'id_rol' });
  roles.hasOne(usuario, { as: 'usuario', foreignKey: 'id_rol' });
  visitante.belongsTo(roles, { as: 'id_rol_role', foreignKey: 'id_rol' });
  roles.hasMany(visitante, { as: 'visitantes', foreignKey: 'id_rol' });
  voluntario.belongsTo(roles, { as: 'id_rol_role', foreignKey: 'id_rol' });
  roles.hasMany(voluntario, { as: 'voluntarios', foreignKey: 'id_rol' });
  usuarioVoluntariado.belongsTo(usuario, { as: 'usuario_idUsuario_usuario', foreignKey: 'usuario_idUsuario' });
  usuario.hasMany(usuarioVoluntariado, { as: 'usuarioVoluntariados', foreignKey: 'usuario_idUsuario' });
  usuarioVoluntariado.belongsTo(voluntariado, { as: 'voluntariadoIdVoluntariado_voluntariado', foreignKey: 'voluntariadoIdVoluntariado' });
  voluntariado.hasMany(usuarioVoluntariado, { as: 'usuarioVoluntariados', foreignKey: 'voluntariadoIdVoluntariado' });

  return {
    administrador,
    carritoRecompensa,
    catalogoProductos,
    coordinador,
    producto,
    productoHasCarritoRecompensa,
    roles,
    usuario,
    usuarioVoluntariado,
    visitante,
    voluntariado,
    voluntario,
  };
}
module.exports = initModels;
const _initModels = initModels;
module.exports = { initModels: _initModels };
const _default = initModels;
module.exports = _default;
