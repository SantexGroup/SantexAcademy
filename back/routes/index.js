/* eslint-disable indent */
const Express = require('express');

const userRouter = require('./user');
const surveyRouter = require('./surveyRouter');
const verificarUsuarioRouter = require('./verificarUsuario');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
// eslint-disable-next-line no-unused-vars
const { verificarUsuario } = require('../controllers/verificarUsuario');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();

// use=
app.use('/ping', (req, res) => {
  res.json({
// eslint-disable-next-line no-tabs
		response: 'pong!',
  });
  });
app.use(rootPath.setHeaders);
app.use('/user', userRouter);
app.use('/api/surveys', surveyRouter);
app.use('/login', verificarUsuarioRouter);

module.exports = app;
