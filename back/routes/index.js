const Express = require('express');

const userRouter = require('./user');
// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const { verificarUsuario } = require('../controllers/verificarUsuario');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
// app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
// app.use(errors.handler);
app.use('/user', userRouter);
app.use('/login', verificarUsuario);

// module.exports = app;
module.exports = app;
