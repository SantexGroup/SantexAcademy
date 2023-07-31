/** funciones para definir esquemas de validación de variables de entorno y asegurarse de que 
 * todas las variables requeridas estén configuradas correctamente antes de iniciar la aplicación*/
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

/** PORT: Debe ser un número de puerto válido.
APP: Debe ser una cadena (string).
ENVIRONMENT: Debe ser una cadena que coincida con una de las opciones proporcionadas: 'development' o 'production'.
DB_HOST: Debe ser una dirección de host válida.
DB_PORT: Debe ser un número de puerto válido.
DB_USERNAME: Debe ser una cadena (string).
DB_PASSWORD: Debe ser una cadena (string).
DB_DATABASE: Debe ser una cadena (string).
DB_DIALECT: Debe ser una cadena (string).
LOG_LEVEL: Debe ser una cadena que coincida con una de las opciones proporcionadas: 'debug', 'info' o 'error'.
CORS: Debe ser una cadena (string).*/