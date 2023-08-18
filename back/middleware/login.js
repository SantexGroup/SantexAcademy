/* eslint-disable no-console */
const loggingMdw = (req, res, next) => {
  console.log(`Se hizo un request a la URL: ${req.url}`);
  res.setHeader('Content-Type', 'Application/json');
  console.log(`Authorization: ${req.get('Authorization')}`);
  next();
};

module.exports = loggingMdw;
