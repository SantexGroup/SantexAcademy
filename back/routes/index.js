const Express = require("express");

const userRouter = require("./user");
const surveyRouter = require("./surveyRouter");
// Middlewares:
const rootPath = require("../middleware/root_path.middleware");
// const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas

// use=
// app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
// app.use(errors.handler);
app.use("/user", userRouter);
app.use("/api/surveys", surveyRouter);
// module.exports = app;
module.exports = app;
