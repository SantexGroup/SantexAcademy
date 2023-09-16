function uploadFile(req, res, next) {
    res.status(200).send('el articulo se subio exitosamente');
    console.log('el articulo se subio exitosamente');

    // devuelve un error, puede ser porque se descarta toda la info que no son imagenes.
};

module.exports = { uploadFile };