const Express = require('express');
const adminRoutes = require('./adminRoutes');
const loginRoutes = require('./loginRoutes');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// use=

app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});

// Router para las vistas

app.get('/login', (req, res) => {
  res.send('login');
});

app.get('/', (req, res) => {
  res.send('Vista Index');
});

// Agregar aqui las rutas
app.use('/admins', adminRoutes);
app.use('/login', loginRoutes);

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
