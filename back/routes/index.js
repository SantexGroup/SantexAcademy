const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

const volunteerRoutes = require('./volunteer-routes');
const coordinatorRoutes = require('./coordinator-routes');
const tareaRoutes = require('./tarea-routes');
const categoryRoutes = require('./category-routes');
const administratorRoutes = require('./administrator-routes');
const premiosRoutes = require('./premios-routes');

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

app.use('/volunteer', volunteerRoutes);
app.use('/coordinator', coordinatorRoutes);
app.use('/tarea', tareaRoutes);
app.use('/category', categoryRoutes);

app.use('/administrator', administratorRoutes);
app.use('/premios', premiosRoutes);

// eslint-disable-next-line max-len
module.exports = {
  // eslint-disable-next-line max-len

  volunteer: volunteerRoutes,
  coordinator: coordinatorRoutes,
  category: categoryRoutes,
  premios: premiosRoutes,
  administrator: administratorRoutes,
  tarea: tareaRoutes,


};
