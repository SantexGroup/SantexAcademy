const direccionService = require('../services/direccion-service');

// desplegable provincias
async function listProvincia(req, res) {
    const provincias = await direccionService.listProvincia();

    //console.log(provincias);
    res.status(201).send(provincias);
}

// desplegable ciudades
async function listLocalidad(req, res) {
    const { idProv } = req.params;
    const localidades = await direccionService.listLocalidad(idProv);

    //console.log(localidades);
    res.status(201).send(localidades);
}

module.exports = { listProvincia, listLocalidad };