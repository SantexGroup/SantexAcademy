const Express = require('express');
const authController = require('../controllers/adminController');
// const passportJwt = require('passport-jwt');

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

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);
// app.use(passportJwt);

// Router para las vistas
app.get('/', (req, res) => {
  res.send('Vista Index');
});

app.get('/login', (req, res) => {
  res.send('login');
});

app.get('/register', (req, res) => {
  res.send('register');
});

// Router para los métodos del controler

app.post('/register', authController.register);
app.post('/login', authController.login);
module.exports = app;
