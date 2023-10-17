const express = require('express');

// Middleware
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

// Rutas
const loginRouter = require('./userRoutes');
const courseRouter = require('./courseRoutes');
const categoryRouter = require('./categoryRoutes');
const authRouter = require('./authRoutes');

const app = express();

app.use('/api/user', loginRouter);
app.use('/api/course', courseRouter);
app.use('/api/category', categoryRouter);
app.use('/api/auth', authRouter);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
