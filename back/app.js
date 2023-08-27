const express = require('express');
const cors = require('cors');
const { initializeDB } = require('./models');
require('dotenv').config();

const routes = require('./routes');
// const {  } = require("./services");

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:4200',
  }),
);

app.listen(PORT, async () => {
  try {
    await initializeDB();
    // await userService.createFirstAdmin();
    console.log(`Listening on port ${PORT}..`);
  } catch (err) {
    console.error('Error initializing DB.', err);
  }
});

app.use('/', routes);

// router controller service provider
