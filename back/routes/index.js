const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

const categoryRouter = require('./category');
const courseRouter = require('./course');
const scheduleRouter = require('./schedule');
const userRouter = require('./userRouter');

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/course', courseRouter);
app.use('/category', categoryRouter);
app.use('/schedule', scheduleRouter);
app.use('/api/users', userRouter);

// endpoints arriba de esta linea
app.use('/', rootPath.handler);

app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
