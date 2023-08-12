const express = require('express');

// // Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const routes = express();

// Rutas
const catalogoRouter = require('./catalogo');

// use=
routes.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
// routes.use('/', rootPath.handler);
// routes.use(rootPath.setHeaders);
// routes.use(errors.handler);

routes.use('/catalogo', catalogoRouter);

module.exports = routes;
