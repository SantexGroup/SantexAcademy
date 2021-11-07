const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
const petRoute = require('./pet.routes');

// use=
app.use('/ping', (req, res) => {
  res.json({
    // eslint-disable-next-line comma-dangle
    response: 'pong!'
  });
});
app.use('/users', userRoute);
app.use('/pets', petRoute);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
