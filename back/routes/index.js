const Express = require('express');
const authLogin = require('./auth_login.route');
const product = require('./products.route');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const user = require('./router_users');

const app = Express();

// Rutas
app.use('/', authLogin);
app.use('/', product);

// use=
app.get('/test', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/user', user);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
