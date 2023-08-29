const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const profileRoutes = require('./profile.routes');
const formationRoutes = require('./formation.routes');
const userRoutes = require('./user.routes');

const languageRoutes = require('./language.routes');

const experienceRoutes = require('./experience.routes');
const referencesRoutes = require('./references.routes');
const skillsRoutes = require('./skills.routes');
const optinalsRoutes = require('./optional.routes');
const contryRoutes = require('./countries.routes');
const sexsRoutes = require('./sexs.routes');
const maritalRoutes = require('./marital.routes');

const app = Express();

// Rutas

app.use('/languages', languageRoutes);
app.use('/optionals', optinalsRoutes);
app.use('/profiles', profileRoutes);
app.use('/formations', formationRoutes);
app.use('/user', userRoutes);
app.use('/experiences', experienceRoutes);
app.use('/references', referencesRoutes);
app.use('/skills', skillsRoutes);
app.use('/countries', contryRoutes);
app.use('/gender', sexsRoutes);
app.use('/marital', maritalRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
