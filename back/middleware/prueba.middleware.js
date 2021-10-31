function prueba (req, res, next){
    console.log('llego al middleware SOLO ES UNA Prueba', req.baseUrl);
    next();
}

module.exports = prueba;