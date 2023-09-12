require('dotenv').config();

// Express Dependencies:
const express = require('express');
// Sanitizacion XSS
const xss = require('xss-clean');
// Custom Dependencies:
const helmet = require('helmet');
const session = require('express-session');
// Winston logger Dependencies
const cors = require('cors');
require('envalid');
const logger = require('./utils/winston.logger');

// Models:
const models = require('./models');

// Rutes:
const routes = require('./routes');
const config = require('./config/config');
const validateEnv = require('./utils/validateEnv');
const { initializeAuthentication } = require('./auth/auth');

const { createAdminDefault } = require('./services/administrator-service');

const app = express();
validateEnv.validate();
app.use(helmet());
app.use(helmet.ieNoOpen());
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));

app.use(xss());
// Sets cookies security settings
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'strict',
    secure: true,
  },
};
if (config.environment === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded(
  {
    extended: false,
    limit: '10kb',
    parameterLimit: 10,
  },
));
initializeAuthentication();
// Cors configuration
// const whitelist = process.env.CORS.split(' ');

app.use(cors());

if (config.environment === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}

models.sequelize.authenticate()
  .then(() => {
    logger.api.debug('Conexión con la Base de Datos: EXITOSA');
  })
  .catch((err) => {
    logger.api.error('Conexión con la Base de Datos: FALLIDA');
    logger.api.error(err);
  });

createAdminDefault('admin@gmail.com', 'Admin123');
// app.use('/', routes);
app.use('/volunteer', routes.volunteer);
app.use('/coordinator', routes.coordinator);
app.use('/category', routes.category);
app.use('/tarea', routes.tarea);
app.use('/administrator', routes.administrator);
app.use('/premios', routes.premios);


module.exports = app;
