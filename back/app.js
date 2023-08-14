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
const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const logger = require('./utils/winston.logger');

// Models:
const models = require('./models');

// Rutes:
const routes = require('./routes');
const config = require('./config/config');
const validateEnv = require('./utils/validateEnv');
const { DataTypes } = require('sequelize');

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

// JWT y passport config

// ...

// Configurar Passport con JWT
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  try {
    const volunteerModel = require('./models/volunteer-model');
    const coordinatorModel = require('./models/coordinator-model');
    const Volunteer = volunteerModel(sequelize, DataTypes);
    const Coordinator = coordinatorModel(sequelize, DataTypes);
    const user = await Volunteer.findByPk(jwtPayload.id);
    const cord = await Coordinator.findByPk(jwtPayload.id);

    if (!user || !cord) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

// Cors configuration
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

// app.use('/', routes);
app.use('/volunteer', routes.volunteer);
app.use('/coordinator', routes.coordinator);
module.exports = app;
