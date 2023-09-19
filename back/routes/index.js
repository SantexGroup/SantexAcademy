const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();
// app.use(rootPath.setHeaders);
// app.use(errors.handler);

// Rutas
const userRoutes = require('./userRoutes');
const profesorRoutes = require('./profesorRoutes');

// use=
app.use('/users', userRoutes);
app.use('/profesors', profesorRoutes);
app.use('/', rootPath.handler);

app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
