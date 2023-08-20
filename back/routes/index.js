const express = require('express');

// // Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const routes = express();

// Rutas
const catalogoRouter = require('./catalogo');
const orgRoutes = require('./organizaciones');
const userRoutes = require('./usuario');

routes.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});

routes.use('/catalogo', catalogoRouter);
routes.use('/org', orgRoutes);
routes.use('/productos', productRouter);

// routes.use('/', rootPath.handler);
// routes.use(rootPath.setHeaders);
// routes.use(errors.handler);

<<<<<<< HEAD
routes.use('/catalogo', catalogoRouter);
routes.use('/org', orgRoutes);
routes.use('/user', userRoutes);

=======
>>>>>>> 0ebccb959db36f0fca4205090b3200c2f0a2f873
module.exports = routes;
