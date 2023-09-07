const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const user=require("./router_users")
const app = Express();

// Rutas

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use("/user",user);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
