const Express = require('express');
const admi = require('../services/admiService')
// Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();
// app.use(rootPath.setHeaders);
// app.use(errors.handler);

// Rutas
const userRoutes = require('./userRoutes');
const profesorRoutes = require('./profesorRoutes');
const cursoRoutes = require('./cursoRoutes')

// use=
app.use('/users', userRoutes);
app.use('/profesors', profesorRoutes);
app.use('/cursos', cursoRoutes);

// app.use('/', rootPath.handler);
// admi.admiCreado()
module.exports = app;
