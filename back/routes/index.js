const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();
// app.use(rootPath.setHeaders);
// app.use(errors.handler);

// Rutas
const userRoutes = require('./userRoutes');


// use=
app.use('/users' , userRoutes);

app.use('/', rootPath.handler);

console.log("estoy en index.js de routes")

module.exports = app;
