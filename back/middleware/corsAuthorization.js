// Middleware personalizado para configurar el encabezado CORS para envios url
const corsHeaders = (req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');//Establece encabezado
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');// Habilita metodos
    res.header('Access-Control-Allow-Credentials', 'true'); // Por las dudas, habilita credenciales
  
    next();
  };

  module.exports = {
    corsHeaders,
  };