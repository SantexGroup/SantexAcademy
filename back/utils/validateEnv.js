const envalid = require('envalid');

module.exports = {
  validate: () => {
    envalid.cleanEnv(process.env, {
      PORT: envalid.port(),
      APP: envalid.str(),
      ENVIRONMENT: envalid.str({ choices: ['development', 'production'] }),
      DB_HOST: envalid.host(),
      DB_PORT: envalid.port(),
      DB_USERNAME: envalid.str(),
      DB_PASSWORD: envalid.str(),
      DB_DATABASE: envalid.str(),
      DB_DIALECT: envalid.str(),
      LOG_LEVEL: envalid.str({ choices: ['debug', 'info', 'error'] }),
      CORS: envalid.str(),
    });
  },
};
