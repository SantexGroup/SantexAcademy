const logger = require('../utils/winston.logger');

// eslint-disable-next-line consistent-return,func-names
const handler = function (err, req, res, next) {
  const { extendBase } = err;
  logger.api.error(err);
  if (extendBase) {
    if (err.metadata) {
      res.statusCode = err.metadata.status;
    } else {
      res.status = err.status;
    }
    res.json(err.message);
  }

  next();
};

module.exports.handler = handler;
