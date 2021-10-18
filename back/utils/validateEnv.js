const envalid = require('envalid');

function validateEnv() {
  envalid.cleanEnv(process.env, {
    APP: envalid.str(),
    ENVIRONMENT: envalid.str({ choices: ['development', 'production'] }),
    DB_HOST: envalid.host(),
    DB_PORT: envalid.port(),
    JWT_ENCRYPTION_TOKEN: envalid.str(),
    JWT_EXPIRATION_TOKEN: envalid.num(),
    DB_USERNAME: envalid.str(),
    DB_PASSWORD: envalid.str(),
    DB_DATABASE: envalid.str(),
    DB_DIALECT: envalid.str(),
    DB_MYSQL_ROOT_PASSWORD: envalid.str(),
    SESSION_SECRET: envalid.str(),
    FRONTEND_PORT: envalid.port(),
    LOG_LEVEL: envalid.str({ choices: ['debug', 'info', 'error'] }),
    CORS: envalid.str(),
  });
}

export default validateEnv;
