const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

const volunteerRoutes = require('./volunteer-routes');
const coordinatorRoutes = require('./coordinator-routes');

// use=

/*
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/hola', (req, res) => {
  res.json({
    response: 'chau!',
  });
});

app.use('/buenos/dias', (req, res) => {
  res.json({
    response: 'buenos dias',
  });
});
*/
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

app.use('/volunteer', volunteerRoutes);
app.use('/coordinator', coordinatorRoutes);

module.exports = { volunteer: volunteerRoutes, coordinator: coordinatorRoutes };
