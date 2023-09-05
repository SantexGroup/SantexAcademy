const express = require('express');
const cors = require('cors');
const { initializeDB, sequelize } = require('./config/db-config');
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
app.use('/api/v1', routes);

app.listen(PORT, async () => {
  try {
    await initializeDB();
    // await userService.createFirstAdmin();
    await sequelize.sync();
    console.log(`Listening on port ${PORT}..`);
  } catch (err) {
    console.error('Error initializing DB.', err);
  }
});

app.get('/', (req, res) => {
  const projectInfo = {
    author: 'Exe Dev',
    description: 'Un cra',
  };

  const htmlResponse = `
    <html>
      <head>
        <title>Información del Proyecto</title>
      </head>
      <body>
        <h1>Proyecto</h1>
        <p>Autor: ${projectInfo.author}</p>
        <p>Descripción: ${projectInfo.description}</p>
      </body>
    </html>
  `;

  res.status(200).send(htmlResponse);
});

// router controller service provider
