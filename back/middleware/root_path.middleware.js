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

/** se admiten solicitudes desde diferentes dominios y con métodos y encabezados personalizados.
 * útil cuando se construye una API o una aplicación que necesita interactuar con diferentes clientes en la web*/
function setHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); /** útil para permitir solicitudes desde diferentes dominios, lo que se conoce como acceso cruzado entre orígenes (CORS)*/
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
    'X-Requested-With, content-type, Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}
module.exports.setHeaders = setHeaders;
