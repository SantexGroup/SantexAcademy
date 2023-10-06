const express = require("express");

const routes = express();
const orgRouter = require("./organizacion");
const userRouter = require("./usuario");
const authRouter = require("./auth");
const voluntariadoRouter = require("./voluntariado");
const adminRouter = require("./admin");

// // Middlewares:
// const rootPath = require('../middleware/root_path.middleware');
// const errors = require('../middleware/error_handler.middleware');

routes.use("/ping", (req, res) => {
  res.json({
    response: "pong!",
  });
});

routes.use("/organizacion", orgRouter);
routes.use("/usuarios", userRouter);
routes.use("/voluntariado", voluntariadoRouter);
routes.use("/auth", authRouter);
routes.use("/admin", adminRouter);

// routes.use('/', rootPath.handler);
// routes.use(rootPath.setHeaders);
// routes.use(errors.handler);

module.exports = routes;
