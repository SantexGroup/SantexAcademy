const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

const volunteerRoutes = require('./volunteer-routes');
const coordinatorRoutes = require('./coordinator-routes');
// const tareaRoutes = require('./tareas-routes');
const categoryRoutes = require('./category-routes');

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

app.use('/volunteer', volunteerRoutes);
app.use('/coordinator', coordinatorRoutes);
// app.use('/tarea', tareaRoutes);
app.use('/category', categoryRoutes);

// eslint-disable-next-line max-len
module.exports = { volunteer: volunteerRoutes, coordinator: coordinatorRoutes, category: categoryRoutes };
