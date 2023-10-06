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

const path = require('path');
const fs = require('fs');
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

// createAdminDefault('admin@gmail.com', 'Admin123');

// app.use('/', routes);
app.use('/volunteer', routes.volunteer);
app.use('/coordinator', routes.coordinator);
app.use('/category', routes.category);
app.use('/tarea', routes.tarea);
app.use('/administrator', routes.administrator);
app.use('/premios', routes.premios);
app.use('/cuentas', routes.cuentas);

//PDFS de voucher generados
//ejemplo http://localhost:3000/mostrar-pdf/21-9-2023-Benja-1_canje_premio.pdf
app.use('/archivos', express.static(path.join(__dirname, 'archivo_premios')));
app.get('/mostrar-pdf/:nombreArchivo', (req, res) => {
  const { nombreArchivo } = req.params;
  const archivoPath = path.join(__dirname, 'archivo_premios', nombreArchivo);
  res.sendFile(archivoPath);
});

//ejemplo: http://localhost:3000/lista-pdfs
app.get('/lista-pdfs', (req, res) => {
  const pdfDir = path.join(__dirname, 'archivo_premios');

  fs.readdir(pdfDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener la lista de PDFs' });
    }

    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    res.json({ pdfs: pdfFiles });
  });
});

module.exports = app;
