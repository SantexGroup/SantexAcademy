const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();
// middleware para json
app.use(Express.json());

// Rutas
const loginRouter = require('./userRouters');
// use=
app.use('/api', loginRouter);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
