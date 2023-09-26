const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { initializeDB, sequelize } = require("./config/db-config");
require("dotenv").config();

const routes = require("./routes");
const app = express();
const { PORT } = process.env;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin(origin, callback) {
//       if (
//         origin === 'http://localhost:4200'
//         || origin === 'https://xacademy-webwarriors.vercel.app'
//         || origin === '*'
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error('No permitido por CORS'));
//       }
//     },
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }),
// );

// app.use(
//   cors({
//     origin(origin, callback) {
//       if (
//         origin === 'http://localhost:4200'
//         || origin === 'https://xacademy-webwarriors.vercel.app'
//         || origin === '*'
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error('No permitido por CORS'));
//       }
//     },
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }),
// );

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);


app.use("/api/v1", routes);


app.listen(PORT, async () => {
  try {
    await initializeDB();
    await sequelize.sync();
    console.log(`Listening on port ${PORT}..`);
  } catch (err) {
    console.error("Error initializing DB.", err);
  }
});
