const express = require('express');

const routes = express();
const catalogoRouter = require('./catalogo');
const orgRouter = require('./organizacion');
const recompensaRouter = require('./recompensa');
const userRouter = require('./usuario');
const vacanteRouter = require('./vacante');
const authRouter = require('./auth');
const voluntariadoRouter = require('./voluntariado');

// // Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

routes.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});

routes.use('/catalogo', catalogoRouter);
routes.use('/org', orgRouter);
routes.use('/recompensas', recompensaRouter);
routes.use('/usuarios', userRouter);
routes.use('/vacante', vacanteRouter);
routes.use('/voluntariado', voluntariadoRouter);
routes.use('/auth', authRouter);

// routes.use('/', rootPath.handler);
// routes.use(rootPath.setHeaders);
// routes.use(errors.handler);

module.exports = routes;
