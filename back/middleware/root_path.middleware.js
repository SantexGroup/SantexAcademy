/**
 * 404: Default route should return 404.
 * @param {*} req Request Obj.
 * @param {*} res Response Obj.
 */
function handler(req, res) {
  res.statusCode = 404;
  res.json({ error: 'not_found', message: 'resource not found' });
}
module.exports.handler = handler;

function setHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
    'X-Requested-With, content-type, Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}
module.exports.setHeaders = setHeaders;
