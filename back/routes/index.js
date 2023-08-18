const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const { isAdminMdw, isTeacherMdw } = require('../middleware/auth');

const app = Express();

// Rutas

const userRouter = require('./user');
const courseRouter = require('./course');
const postRouter = require('./post');

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/courses', courseRouter);
app.use('/posts', postRouter);
app.use('/users', userRouter);
app.get('/onlyadmin', isAdminMdw, (req, res) => {
  res.send({
    msg: 'Aca solo llegan los admins',
  });
});
app.get('/onlyteacher', isTeacherMdw, (req, res) => {
  res.send({
    msg: 'Aca solo llegan los teachers',
  });
});

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
