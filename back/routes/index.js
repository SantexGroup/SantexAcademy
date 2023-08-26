const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const loginRouter = require('./userRoutes');
const courseRouter = require('./courseRoutes');
// use=
app.use('/api/user', loginRouter);
app.use('/api/course', courseRouter);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
