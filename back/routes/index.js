const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const courseRoutes = require('./course');
const userRoutes = require('./user');
const coursesDetailRoutes = require('./courseDetail');
const teacherRoutes = require('./teacher');

// use=
app.use('/coursesDetail', coursesDetailRoutes);
app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);
app.use('/user', userRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
