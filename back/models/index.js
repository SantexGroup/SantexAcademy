/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// RELACIONES

db.User = require('./user')(sequelize, Sequelize);
db.Products = require('./products')(sequelize, Sequelize);
db.Images = require('./images')(sequelize, Sequelize);
db.tipoProducto = require('./tipoproducto')(sequelize, Sequelize);
db.alquiler = require('./alquiler')(sequelize, Sequelize);
db.estado = require('./estado')(sequelize, Sequelize);
db.direccion = require('./direccion')(sequelize, Sequelize);
db.localidad = require('./localidad')(sequelize, Sequelize);
db.provincia = require('./provincia')(sequelize, Sequelize);

// Relacion User-Products (one-to-many)
db.User.hasMany(db.Products, {
  foreignKey: 'idUsuario'
});
db.Products.belongsTo(db.User, {
  foreignKey: 'idUsuario'
});

// Relacion Products-Images (one-to-many)
db.Products.hasMany(db.Images, {
  foreignKey: 'idProducto'
});
db.Images.belongsTo(db.Products, {
  foreignKey: 'idProducto'
});

// Relacion tipoProducto-Products (one-to-many)
db.tipoProducto.hasMany(db.Products, {
  foreignKey: 'idTipoProducto'
});
db.Products.belongsTo(db.tipoProducto, {
  foreignKey: 'idTipoProducto'
});

// Relacion Products-Alquiler (one-to-one)
db.Products.hasOne(db.alquiler, {
  foreignKey: 'idProducto'
});
db.alquiler.belongsTo(db.Products, {
  foreignKey: 'idProducto'
});

// Relacion Usuario-Alquiler (one-to-many)
db.User.hasMany(db.alquiler, {
  foreignKey: 'idComprador'
});
db.alquiler.belongsTo(db.User, {
  foreignKey: 'idComprador'
});

// Relacion Estado-Alquiler (one-to-many)
db.estado.hasMany(db.alquiler, {
  foreignKey: 'idEstado'
});
db.alquiler.belongsTo(db.estado, {
  foreignKey: 'idEstado'
});

// Relacion Direccion-User (one-to-one)
db.direccion.hasOne(db.User, {
  foreignKey: 'idDireccion'
});
db.User.belongsTo(db.direccion, {
  foreignKey: 'idDireccion'
});

// Relacion Localidad-Direccion (one-to-many)
db.localidad.hasMany(db.direccion, {
  foreignKey: 'idLocalidad'
});
db.direccion.belongsTo(db.localidad, {
  foreignKey: 'idLocalidad'
});

// Relacion Provincia-Localidad (one-to-many)
db.provincia.hasMany(db.localidad, {
  foreignKey: 'idProvincia'
});
db.localidad.belongsTo(db.provincia, {
  foreignKey: 'idProvincia'
});

module.exports = db;
