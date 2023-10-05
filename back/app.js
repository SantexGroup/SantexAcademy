require('dotenv').config();

// Express Dependencies:
const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');
const logger = require('./utils/winston.logger');

// Models:
const models = require('./models');

// Rutes:
const routes = require('./routes');

const config = require('./config/config');
const validateEnv = require('./utils/validateEnv');

const app = express();
validateEnv.validate();
app.use(helmet());
app.use(helmet.ieNoOpen());
const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));

app.use(xss());

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
  app.set('trust proxy', 1);
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

const whitelist = process.env.CORS.split(' ');

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      logger.api.error('Not allowed by CORS', { origin });
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

models.sequelize.authenticate()
  .then(() => {
    logger.api.debug('Conexión con la Base de Datos: EXITOSA');

    // Sincroniza los modelos con la base de datos
    return models.sequelize.sync();
  })
  .then(() => {
    logger.api.debug('Modelos sincronizados correctamente con la Base de Datos');
  })
  .catch((err) => {
    logger.api.error('Conexión con la Base de Datos: FALLIDA');
    logger.api.error(err);
  });

app.use('/', routes);

module.exports = app;
