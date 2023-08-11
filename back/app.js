const express = require('express');
const { catalogoRouter } = require("./routes");
const cors = require('cors');
const { initializeDB, sequelize } = require('./config/db-config');
require('dotenv').config();

// const {  } = require("./routes");
// const {  } = require("./services");

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000/',
  }),
);

app.listen(PORT, async () => {
  try {
    await initializeDB();
    await sequelize.sync();
    console.log(`Listening on port ${PORT}..`);
  } catch (err) {
    console.error('Error initializing DB.', err);
  }
});

app.use('/catalogo' , catalogoRouter )

// router controller service provider
