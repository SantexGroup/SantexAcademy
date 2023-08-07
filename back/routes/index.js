const Express = require('express');
const courseRouter = require('./course');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
<<<<<<< HEAD

app.use('/course', courseRouter);

=======
const userRouter = require('./user');
>>>>>>> 39527f540919d7deadbe30eefd77484389c4d4f4
// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/users', userRouter);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
