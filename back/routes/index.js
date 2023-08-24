const Express = require('express');
const adminRoutes = require('./adminRoutes');

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

/* app.get('/login', (req, res) => {
  res.send('login');
}); */

app.get('/register', (req, res) => {
  res.send('register');
});

app.use('/admins', adminRoutes);

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

app.get('/', (req, res) => {
  res.send('Vista Index');
});

module.exports = app;
