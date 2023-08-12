const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const profileRoutes = require('./profile.routes');
const formationRoutes = require('./formation.routes');
const userRoutes = require('./user.routes');
const experienceRoutes = require('./experience.routes');
const referencesRoutes = require('./references.routes');
const optinalsRoutes = require('./optional.routes');

const app = Express();

// Rutas
app.use('/optionals', optinalsRoutes);
app.use('/profiles', profileRoutes);
app.use('/formations', formationRoutes);
app.use('/user', userRoutes);
app.use('/experiences', experienceRoutes);
app.use('/references', referencesRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
