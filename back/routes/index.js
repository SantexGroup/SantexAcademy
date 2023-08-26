/* eslint-disable indent */
const Express = require('express');
const userRouter = require('./userRoutes');
const surveyRouter = require('./surveyRoutes');
// Middlewares:
const rootPath = require('../middleware/root_path.middleware');

const app = Express();

app.use(rootPath.setHeaders);
app.use('/user', userRouter);
app.use('/api/surveys', surveyRouter);

module.exports = app;
