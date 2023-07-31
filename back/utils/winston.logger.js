/** Permite guardar los registros en archivos diarios rotativos, manteniendo un cierto número 
 *de archivos antiguos(15dias).
 *"moment" biblioteca de JS facilita manejo y formato de fechas y horas*/
const winston = require('winston');
require('winston-daily-rotate-file');
const moment = require('moment');

const transportApi = new (winston.transports.DailyRotateFile)({
  filename: `${__dirname}/../logs/${process.env.APP}-%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true, /** archivos antiguos deben ser comprimidos en formato ZIP*/
  maxSize: '10m', /** tamaño máximo que un archivo puede alcanzar antes de rotar a un nuevo archivo **/
  maxFiles: '15d', /** número máximo de archivos de registro que se conservarán antes de que los archivos más antiguos sean eliminados. Se mantendrán durante 15 días antes de eliminarlos. */
});
const appendTimestamp = winston.format(
  (info) => Object.assign(info, { timestamp: moment().format() }),
);
/** objeto que contiene un logger llamado "api" creado con winston.createLogger(). 
* Se configura el nivel de registro según el valor de la variable de entorno process.env.LOG_LEVEL*/
module.exports = {
  api: winston.createLogger(
    {
      // info, debug, error
      level: process.env.LOG_LEVEL,
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.metadata(),
        appendTimestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json(),
      ),
      transports: [
        transportApi,
        new winston.transports.Console(
          {},
        ),
      ],
    },
  ),
};
