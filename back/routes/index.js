const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const { authMW } = require('../middleware/authentication.middleware');
const { adminCheck } = require('../middleware/authentication.middleware');

const app = Express();

// Rutas
const userRouter = require('./userRouter');
const authRouter = require('./authenticationRouter');

// use=
app.use('/ping', authMW, adminCheck, (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use(rootPath.setHeaders);
app.use(errors.handler);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

module.exports = app;
