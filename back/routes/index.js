const express = require('express');

const routes = express();

// // Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const catalogoRouter = require('./catalogo');
const orgRouter = require('./organizacion');
const productRouter = require('./producto');
const userRouter = require('./usuario');

routes.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});

routes.use('/catalogo', catalogoRouter);
routes.use('/org', orgRouter);
routes.use('/productos', productRouter);
routes.use('/usuarios', userRouter);

// routes.use('/', rootPath.handler);
// routes.use(rootPath.setHeaders);
// routes.use(errors.handler);

module.exports = routes;
