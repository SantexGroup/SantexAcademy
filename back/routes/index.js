const Express = require('express');

const userRouter = require('./user');
const surveyRouter = require('./surveyRouter');
const surveyorRoutes = require('./surveyorRoutes');
// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

const app = Express();

app.use(rootPath.setHeaders);
app.use('/user', userRouter);
app.use('/api/surveys', surveyRouter);
app.use('/api/surveyors', surveyorRoutes);

module.exports = app;
