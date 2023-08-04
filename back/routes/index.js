const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const userRoutes = require('./user');
const profileRoutes = require('./profile.routes');

const app = Express();

// Rutas

// use=
app.use('/profiles', profileRoutes);
app.use('/user', userRoutes);

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
