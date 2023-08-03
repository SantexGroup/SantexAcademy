const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const profileController = require('../controllers/profile.controller');

const userRoutes = require('./user');

const app = Express();

// Rutas

// use=

// app.use('/ping', (req, res) => {
//   res.json({
//     response: 'pong!',
//   });
// });

app.use('/profile/:id', profileController.getProfile);
app.use('/user', userRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
